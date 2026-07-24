---
layout: case-study
title: "Inventory prediction at D2C scale"
customer_label: "Bay Area digital native"
industry: "D2C / Supply"
domains:
  - Inventory
  - Forecasting
technologies:
  - Apache Kafka
  - Apache Flink
  - Aerospike
  - Databricks
  - Apache Spark
  - ClickHouse
summary: "Inventory prediction fed by streaming demand signals—Aerospike online features, lakehouse forecasting, ClickHouse for interactive planning."
weight: 180
draft_status: approved
the_customer: |
  A Bay Area digital native with inventory risk on both sides of the ledger: stockouts kill conversion; overstock kills margin.

  Demand moved faster than batch forecasting could explain.

challenge: |
  Forecast quality collapsed when feature freshness and channel events lagged.

  Disconnected weekly model runs could not drive replenishment.

work: |
  Inventory prediction platform: Kafka / Flink for demand and supply signals, Aerospike for online inventory features, Databricks / Spark for forecasting workloads, ClickHouse for interactive planning analytics.

impact:
  - "Streaming demand and supply signals into inventory prediction loops"
  - "Lakehouse forecasting coupled to fresher operational context"
  - "Replenishment-oriented data path—not a disconnected weekly model run"
---
