---
layout: case-study
title: "Audience curation & attribution"
customer_label: "Bay Area startup"
industry: "Growth / Advertising"
tags:
  - AI/ML
  - Product Engineering
  - Data Platform
technologies:
  - Apache Kafka
  - Databricks
  - Apache Spark
  - Apache Druid
summary: "Audience curation for exclusions and attribution reconciliation—pixel/beacon shim, probabilistic identity, SKU/inventory exclusion sync. MVP in 3 months; >40% demonstrated campaign budget savings and ROAS lift."
weight: 140
draft_status: approved
the_customer: |
  A Bay Area startup competing on acquisition efficiency. Stale or over-broad audiences burn budget; attribution lag hides what actually worked.

challenge: |
  Event order, identity, and attribution diverged across channels. Per-campaign ETL could not keep exclusions and signal freshness aligned—especially when source truth still lived in third-party pixels and beacons.

work: |
  Owned product engineering for audience curation (mainly exclusions), attribution reconciliation, and analytics on Databricks, Kafka, Spark, and Druid.

  Built a shim / call trap over existing pixels and beacons so data landed consistently. Advanced fingerprints and graph resolution for probabilistic user identity. Built exclusion lists—channel, product at SKU level, inventory—and synced them into campaigns.

  Integrations included Google Analytics, Facebook / Meta, and several others.

impact:
  - "MVP in ~3 months"
  - ">40% demonstrated savings on campaign budgets and ROAS"
  - "Pixel/beacon shim; probabilistic fingerprint & graph resolution; channel / SKU / inventory exclusion sync"
  - "GA, Meta, and multi-channel integrations"
---
