---
layout: case-study
title: "System Twin — Border Control (MEA)"
customer_label: "Leading MEA border control"
industry: "Public sector"
tags:
  - Performance Engineering
  - Platform Excellence
  - Modernization
technologies:
  - Apache Kafka
  - Kafka Streams
  - Kubernetes
summary: "System twin for border operations—e-gate and counter staffing against passenger load; Kafka Streams event-sourced rebuild; dual-write consistency; 2.5DC stretch cluster; e2e p99 under 50ms at zero RTO/RPO."
weight: 30
draft_status: approved
the_customer: |
  A leading Middle East & Africa border-control operator. Mission-critical passenger flow: e-gates, counters, staff and shifts under peak arrival waves.

  The system had to stay up for operational simulation and surveillance—matching capacity to load—at zero RTO / RPO.

challenge: |
  Simulate and monitor e-gate, staff, and counter availability against arriving passenger load.

  The incumbent stack was largely Spring Boot with request-reply bolted onto Kafka. That shape had serious performance problems. The estate was also a 2.5DC stretch cluster with known gaps—notably Zookeeper timeouts—that blocked a trustworthy latency envelope on a zero RTO/RPO system.

work: |
  Owned system architecture and performance engineering. Rebuilt the core as a domain-modeled twin: event-sourced aggregates for system state and simulation, on Kafka and Kafka Streams.

  Moved off request-reply-on-Kafka. Dual-writes to Kafka alongside the RDBMS kept consistency without CDC overhead. Hardened the 2.5DC stretch cluster—including Zookeeper timeout failure modes—so the latency envelope could hold.

impact:
  - "End-to-end p99 under 50ms on the decision / simulation path"
  - "Event-sourced twin for e-gate and counter capacity against passenger load"
  - "Dual-write consistency without CDC overhead; stretch-cluster gaps closed for zero RTO/RPO"
---
