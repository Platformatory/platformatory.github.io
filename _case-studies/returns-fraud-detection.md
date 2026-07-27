---
layout: case-study
title: "Real-time returns fraud detection"
customer_label: "Bay Area startup"
industry: "Risk / Fraud"
tags:
  - AI/ML
  - Product Engineering
  - Performance Engineering
technologies:
  - Apache Kafka
  - Apache Flink
  - Flink ML
  - Akka
  - Scala
summary: "Returns-fraud decisioning with fail-closed sub-50ms p99 and fail-open batch paths—adaptive risk tree with rule CEP and Flink ML ensembles, RLHF continual learning on weighted real-time features. MVP with design partners in ~6 months."
weight: 130
draft_status: approved
the_customer: |
  A Bay Area startup where returns fraud is a product problem: abuse at the edge of the brand promise, decided inside storefront latency budgets.

challenge: |
  Batch scores went stale before returns finalized. Static rules got gamed. Risk needed online decisioning that could track adversarial drift—and a deliberate choice between fail-closed online and fail-open batch, not a single brittle mode.

work: |
  Owned the full product surface, including the API layer, and service golden signals (saturation, latency, throughput, error rates).

  Built on Kafka, Flink, Akka, and Scala. The decision path was an adaptive, risk-based tree: rule-based complex event processing plus an ensemble of models on Flink ML.

  Two operating modes: fail-closed online inference at sub-50ms p99, and fail-open batch. RLHF with continual learning on weighted real-time features kept the ensembles current under adversarial drift.

impact:
  - "Sub-50ms p99 fail-closed inference; fail-open batch as a deliberate alternative"
  - "Adaptive risk tree: rule CEP + Flink ML ensembles; RLHF continual learning on weighted real-time features"
  - "Full ownership through the API layer and golden signals"
  - "Strong MVP with design partners in ~6 months"
---
