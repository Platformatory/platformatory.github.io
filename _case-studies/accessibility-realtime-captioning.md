---
layout: case-study
title: "Real-time accessibility captioning"
customer_label: "Accessibility technology provider"
industry: "Accessibility / Media"
tags:
  - Product Engineering
  - Modernization
  - Platform Excellence
technologies:
  - Apache Kafka
  - Apache Flink
  - Kubernetes
  - Asterisk
  - Kamailio
  - WebRTC
  - Java
  - Scala
  - Akka
  - Play Framework
summary: "Core platform for FCC-approved ADA live captions on assisted calls—multi-lingual ASR, human-assisted / human-reviewed captioning, SIP trunking (Asterisk), Kamailio, homegrown WebRTC, E911 and messaging, plus new APIs and identity infrastructure."
weight: 160
draft_status: approved
the_customer: |
  An accessibility technology provider delivering live captions for assisted calls—an FCC-approved solution under the ADA. Latency and correctness are the product.

challenge: |
  Live assisted-call captioning brings media and telephony pain—jitter, failover, session affinity, emergency routing—and a non-negotiable human outcome. Late or wrong captions break the promise to users who depend on them.

  They needed a modernized core: speech, captioning modes, call bridging, emergency services, and API/identity infrastructure as one product—not bolted-on pieces.

work: |
  Owned core platform build-out as product engineering and modernization.

  - Bespoke multi-lingual ASR models for transcription
  - Real-time captioning with human-assisted / human-reviewed mode
  - Telephony / VoIP for call bridges: SIP trunking (Asterisk), Kamailio, and a homegrown WebRTC stack
  - E911 and emergency services, plus messaging
  - New APIs on Java, Scala, Akka, and Play Framework
  - Identity and API infrastructure

  Kafka, Flink, and Kubernetes where session-scale caption delivery required it.

impact:
  - "FCC-approved ADA live captioning for assisted calls on a modernized core platform"
  - "Multi-lingual ASR with human-assisted / human-reviewed real-time captioning"
  - "Call-bridge stack: Asterisk SIP trunking, Kamailio, homegrown WebRTC; E911 and messaging"
  - "New Java/Scala/Akka/Play APIs with identity & API infrastructure"
---
