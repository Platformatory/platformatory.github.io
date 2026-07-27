---
layout: case-study
title: "Control Tower Operations: Supply Chain Optimization"
customer_label: "Large Asian retailer (eCommerce)"
industry: "Retail / eCommerce"
tags:
  - Product Engineering
  - AI/ML
  - Data Platform
technologies:
  - Apache Kafka
  - Apache Pinot
  - Kafka Connect
summary: "Control-tower operations for last-mile fulfillment—manpower allocation and re-allocation. WMS and bespoke sensor/tag integration for SKU-level tracking; Pinot real-time MVs for delivery-throughput baselines; decision nudges to warehouse operators."
weight: 180
draft_status: approved
the_customer: |
  A large Asian eCommerce retailer running last-mile fulfillment at scale. Warehouse manpower allocation and re-allocation decide whether throughput holds under live demand.

challenge: |
  In last-mile fulfillment, operators needed timely decisions on manpower allocation and re-allocation. WMS state alone was not enough. SKU-level movement, sensor/tag reality on the floor, and predictive baselines for delivery throughput had to reach operators as nudges—not after-the-fact reports.

work: |
  Built control-tower operations for supply-chain optimization in last-mile fulfillment. Integrated with the WMS—including bespoke sensors and tags—for SKU-level tracking. Predictive analytics on last-mile delivery throughput baselines, surfaced as decision nudges to warehouse operators.

  Kafka and Kafka Connect (plus custom connectors) into the warehouse and sensor path; Apache Pinot for real-time materialised views.

impact:
  - "Control-tower path for manpower allocation / re-allocation in last-mile fulfillment"
  - "WMS + bespoke sensor/tag integration for SKU-level tracking"
  - "Pinot real-time MVs for delivery-throughput baselines; decision nudges to warehouse operators"
---
