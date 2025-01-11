---
layout: v2_home
title: Home
description: Platformatory home page.
intro_image: "images/banners/pexels-maximilian-ruther-11589778.jpg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
sections:
  - title: Platform & Product Engineering, for the AI age.
    featured: false
    summary: "We transform our customers' tech estate and operating model with cloud-native infrastructure, real-time data and modern integration."
    raw_content: |
      <section class="raw-section-container typewirter-and-quotes">
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
  - title: "We have a unique thesis on what it takes to build and scale platform-led products."
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
        # link:
        #   name: "→ The most interesting infrastructure companies"
        #   url: "/blog/platform-engineering-manifesto/"
        description: "Ubiquitous distributed systems interfaces (such as Apache Kafka, Kubernetes, PostgreSQL, Temporal and more)."
      - name: "Lean-operations"
        class: "text-left"
        # link:
        #   name: "→ A leaderless future (of streaming)"
        #   url: "/blog/a-leaderless-future-kafka-streaming/"
        description: <em>One-pizza</em> teams to build & operate platforms that extract common cross-cutting concerns.
      - name: "A minimum viable level of self-service."
        class: "text-left"
        # link:
        #   name: "→ Real-time for prime-time"
        #   url: "/blog/real-time-data-prime-time/"
        description: "First class DevX, Human augmented AI and well governed, secure foundational tooling (for just about everything)"
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
          - name: "Kafka Streams"
            url: "../images/v2/expertise/kafka-streams.png"
          - name: "Kafka Connect"
            url: "../images/v2/expertise/kafka-connect.png"
          - name: "Apache Flink"
            url: "../images/v2/expertise/apache-flink.png"
          - name: "Apache Spark"
            url: "../images/v2/expertise/apache-spark.png"
          - name: "Debezium"
            url: "../images/v2/expertise/apache-beam.png"
          - name: "Kong"
            url: "../images/v2/partners/kong.png"
          - name: "Temporal"
            url: "../images/v2/partners/temporal.png"
          - name: "Apache Airflow"
            url: "../images/v2/expertise/apache-airflow.png"
          - name: "Apache Druid"
            url: "../images/v2/expertise/apache-druid.png"
          - name: "ClickHouse"
            url: "../images/v2/partners/clickhouse.png"
          - name: "Areospike"
            url: "../images/v2/partners/areospike.png"
          - name: "Apache Hudi"
            url: "../images/v2/expertise/apache-hudi.png"
          - name: "Databricks"
            url: "../images/v2/expertise/databricks.png"
          - name: "Duckdb"
            url: "../images/v2/expertise/duckdb.png"
          - name: "Kubernetes"
            url: "../images/v2/expertise/kubernetes.png"
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
  - title: "Open-source, community and thought leadership."
    featured: true
    weight: 1#3e4341
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


  <div id="splash-screen" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0d1926; z-index: 9999;">
    <div class="home-banner-container">
    <div id="monitor" class="theme-green">
    <div id="screen">
      <div id="crt">
        <div class="scanline"></div>
        <div class="terminal">
          ### booting platformatory 
  
[    0.000000] Platformatory kernel version 1.0.0 (gcc 10.3.0)
[    0.000001] Command line: BOOT_IMAGE=/boot/vmlinuz-1.0.0-generic root=UUID=platformatory ro quiet splash vt.handoff=7
[    0.000002] initializing subsys: culture, 10x engineering
[    0.000003] initializing ordered polyglot stack: golang, rust, python, javascript, lua, c++, jvm (ugh)
[    0.000004] starting platform stack v 4.2.....
[    0.000005] initializing cloud-native and hybrid environments: metal, aws, gcp, azure, k8s
[    0.000006] initializing distributed streaming and real-time stack: apache kafka, flink, spark, clickhouse, pinot
[    0.000007] initializing data infra lite: duckdb, rocksdb, adf (and more)
[    0.000008] initializing data infra at large: hudi, delta lake, trino (and more)
[    0.000008] initializing networking & connectivity stack: envoy, kong (and more)
[    0.000009] initializing durable execution stack: cadence, temporal (annd more)
[    0.000010] spawning our inner daemons: oss, community
[    1.234567] fast init done. do whatever to continue

platformatory 20.24 LTS lifeuniverseandeverything tty1

guest@platformatory:~$ /etc/init.d/platformatorywebdm start
Starting platformatorydm (via systemctl): platformatorywebdm.service.
        </div>
      </div>
    </div>
    <button class="enter-button" onclick="hideSplashScreen()"><svg height="4rem" width="4rem" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.143 30.143" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffffff;" d="M20.034,2.357v3.824c3.482,1.798,5.869,5.427,5.869,9.619c0,5.98-4.848,10.83-10.828,10.83 c-5.982,0-10.832-4.85-10.832-10.83c0-3.844,2.012-7.215,5.029-9.136V2.689C4.245,4.918,0.731,9.945,0.731,15.801 c0,7.921,6.42,14.342,14.34,14.342c7.924,0,14.342-6.421,14.342-14.342C29.412,9.624,25.501,4.379,20.034,2.357z"></path> <path style="fill:#ffffff;" d="M14.795,17.652c1.576,0,1.736-0.931,1.736-2.076V2.08c0-1.148-0.16-2.08-1.736-2.08 c-1.57,0-1.732,0.932-1.732,2.08v13.496C13.062,16.722,13.225,17.652,14.795,17.652z"></path> </g> </g></svg></button>
  </div>
  
  </div>
</div>
