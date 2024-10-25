---
layout: v2_home
title: Home
description: Platformatory home page.
intro_image: "images/banners/pexels-maximilian-ruther-11589778.jpg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
what_we_do_label: "Our superpowers in the cloud native landscape"
what_we_do: "Boutique engineering expertise, breadth & depth across, <br><strong>Hyperscale Data, Event Streaming, Machine Learning and API-based connectivity</strong>."
sections:
  - title: Platform & Product Engineering, for the AI age.
    featured: false
    summary: "We transform our customers' tech estate and operating model with cloud-native infrastructure, real-time data and modern integration."
    raw_content: |
      <section class="raw-section-container">
        <div id="platform-product-engineering" class="container">
          <div style="justify-content: space-evenly;" class="d-flex flex-column h-100 ">
            <div>
              <h1 class="text-capitalize mb-1 title">We Engineer.</h1>
              <h1 class="text-capitalize mb-1 title"><span id="typewriter-title">Platforms & Products.</span></h1>
              <h3 class="sub-title">Powered by real-time data & AI.</h3>
            </div>
            <div class="d-flex justify-content-center">
              <p class="quote-content"> <span class="quote">A product is useless without a platform, or more precisely and accurately, a platform-less product will always be replaced by an equivalent platform-ized product</span>  – Steve Yegge</p>
           </div>
          </div>  
        </div>
      </section>
  - title: Our field expertise here is unparalleled. 
    featured: false
    summary: ""
    hash: "expertise"
    section:
      class: "split-container"
      feature_type: "images"
    features:
      - name: ""
        cta: false
        class: "expertise"
        images:
          - name: "Apache Kafka"
            url: "../images/v2/expertise/apache-kafka.png"
          - name: "Apache Flink"
            url: "../images/v2/expertise/apache-flink.png"
          - name: "Apache Spark"
            url: "../images/v2/expertise/apache-spark.png"
          - name: "Debezium"
            url: "../images/v2/expertise/debezium.png"
          - name: "Kafka Connect"
            url: "../images/v2/expertise/kafka-connect.png"
          - name: "Benthos"
            url: "../images/v2/expertise/benthos.png"
          - name: "Kong"
            url: "../images/v2/partners/kong.png"
          - name: "Temporal"
            url: "../images/v2/partners/temporal.png"
          - name: "ClickHouse"
            url: "../images/v2/partners/clickhouse.png"
          - name: "Druid"
            url: "../images/v2/expertise/apache-druid.png"
          - name: "Pinot"
            url: "../images/v2/expertise/apache-pinot.png"
  - title: "We have a unique thesis on what it takes to scale platform-led products."
    featured: true
    weight: 3
    summary: ""
    image: "../images/icons/automation.png"
    caption: "Automated deployment and scaling."
    hash: "scale-platform-led-products"
    section:
      class: "split-container"
      feature_type: "list"
    features:
      - name: "Building on great platform primitives"
        class: "text-left"
        link:
          name: "→ The most interesting infrastructure companies"
          url: "/blog/platform-engineering-manifesto/"
        description: "Specialize deeply on ubiquitous distributed systems interfaces(such as Apache Kafka, Kubernetes, PostgreSQL, Temporal and more). These are the building blocks."
      - name: "Lean-operations"
        class: "text-left"
        link:
          name: "→ A leaderless future (of streaming)"
          url: "/blog/a-leaderless-future-kafka-streaming/"
        description: "Create highly skilled, “one-pizza” teams to build & operate platforms that extract common cross-cutting concerns."
      - name: "A minimum viable level of self-service."
        class: "text-left"
        link:
          name: "→ Real-time for prime-time"
          url: "/blog/real-time-data-prime-time/"
        description: "First class DevX, Human augmented AI and well governed, secure foundational tooling (for just about everything)"

  - title: "Partnerships (without partisanship)"
    featured: true
    weight: 2
    summary: "A promise to deliver real customer value on platform investments. "
    image: "../images/icons/security-engineering.png"
    caption: "Comprehensive security strategies."
    hash: "partnerships"
    section:
      class: "split-container"
      feature_type: "images"
      # grid_order_class: "reverse"
    features: 
      - name: ""
        cta: false
        class: "partners"
        images: 
          - name: "Confluent"
            url: "../images/v2/partners/confluent.png"
          - name: "VmWare"
            url: "../images/v2/partners/temporal.png"
          - name: "kong"
            url: "../images/v2/partners/kong.png"
          - name: "Tata Digital"
            url: "../images/v2/customers/tata-digital.png"
          - name: "Bosch"
            url: "../images/v2/customers/bosch.png"
          - name: "Jollibee"
            url: "../images/v2/customers/jollibee.png"
          # - name: "clickhouse"
          #   url: "../images/v2/partners/clickhouse.png"
          # - name: "imply"
          #   url: "../images/v2/partners/imply.png"
          # - name: "startree"
          #   url: "../images/v2/partners/startree.png"
          # - name: "areospike"
          #   url: "../images/v2/partners/areospike.png"

  - title: "A new category of solutions."
    featured: true
    summary: ""
    caption: "Comprehensive security strategies."
    hash: "solutions"
    section:
      class: "split-container"
      feature_type: "images"
    features:
      - name: ""
        cta: false
        class: "solutions"
        images:
          - name: "Apinomy" 
            url: "../images/v2/products/apinomy.png"
            summary: "Apinomy enables you to monetize your data and APIs by bundling them into meaningful products."
          - name: "Eventception"
            url: "../images/v2/products/eventception.png"
            summary: "Eventception is a platform to synthesize events from API transactions."
          - name: "RTDx"
            url: "../images/v2/products/rtdx.png"
            summary: "RTDx is a platform for exchanging operational and analytical data in real-time."
          # - name: "kEDgy"
          #   url: "../images/v2/products/kedgy.png"
  - title: "Open-source, community and thought leadership."
    featured: true
    weight: 1
    summary: ""
    image: "../images/icons/security-engineering.png"
    caption: "Comprehensive security strategies."
    hash: "opensource-community"
    section:
      class: "split-container"
      feature_type: "images"
    features: 
      - name: ""
        cta: true
        class: "community"
        images: 
          - name: "Bengaluru streams"
            url: "../images/v2/meetup-community/streams.png"
            link: "https://meetup.com/bangalore-streams"
          - name: "Large Scale Distributed Systems"
            url: "../images/v2/meetup-community/large_scale_systems.png"
            link: "https://meetup.com/lsds-bangalore"
          - name: "Kong Meetup"
            url: "../images/v2/meetup-community/kong.png"
            link: "meetup.com/kong-bengaluru"
          - name: "Temporal Community"
            url: "../images/v2/meetup-community/temporal.png"
            link: "https://temporal.io/community"
          - name: "Grafana Meetup"
            url: "../images/v2/meetup-community/grafana.png"
            link: "https://meetup.com/grafana-and-friends-bengaluru"
          - name: "Bangalore Kafka"
            url: "../images/v2/meetup-community/kafka.png"
            link: "https://meetup.com/bangalore-kafka-data-streams"

--- 

# Platform & Product Engineering, for the AI age.

We transform our customers' tech estate and operating model with cloud-native infrastructure, real-time data and modern integration.

> A product is useless without a platform, or more precisely and accurately, a platform-less product will always be replaced by an equivalent platform-ized product – Steve Yegge 
