---
layout: case-study
title: "Device telemetry — hub & spoke"
customer_label: "Global medical device leader"
industry: "Healthcare"
tags:
  - Data Platform
  - Data Engineering
technologies:
  - Apache Kafka
  - Apache Flink
  - MQTT
  - Confluent
  - Databricks
  - Apache Spark
  - AsyncAPI
summary: "Device telemetry over MQTT gateways in a regional hub-and-spoke design—real-time signals and historicals on one backbone; AsyncAPI for REST adoption. 500K+ devices globally; 30B+ events/day."
weight: 100
draft_status: approved
the_customer: |
  A global medical device leader instrumenting fleets in the field. Telemetry feeds product, operations, and analytics—not a side channel.

challenge: |
  Device traffic arrived through MQTT gateways across regions. Real-time signals and historical retention had to share one trustworthy backbone. Copy-everything-to-the-lake failed on both speed and control.

  Interface sprawl made producer and consumer contracts hard to adopt. Teams needed a governed way to expose and consume the backbone, including REST-shaped access.

work: |
  Owned the data backbone for device telemetry: MQTT gateways feeding a regional hub-and-spoke architecture for both real-time signals and historicals.

  Drove REST interface adoption via AsyncAPI so contracts were explicit. Kafka, Flink, and Confluent for movement; Databricks and Spark on the lakehouse path so analytics stayed aligned to the same events.

impact:
  - "500K+ devices managed globally on the telemetry backbone"
  - "30B+ events/day through the hub-and-spoke design"
  - "Real-time signals and historicals on one backbone; AsyncAPI-governed REST adoption"
---
