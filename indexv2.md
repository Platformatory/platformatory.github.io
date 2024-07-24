---
layout: slides
---

<section data-markdown class="left-aligned">
<script type="text/template">
### booting platformatory  
<div class="typewriter">
<div id="typewriter-content" style="font-size:small;">
[    0.000000] Platformatory kernel version 1.0.0 (gcc 10.3.0)
[    0.000001] Command line: BOOT_IMAGE=/boot/vmlinuz-1.0.0-generic root=UUID=platformatory ro quiet splash vt.handoff=7
[    0.000002] initializing subsys: culture, 10x engineering, and more
[    0.000003] initializing ordered polyglot stack: golang, rust, python, javascript, lua, c++, jvm (ugh)
[    0.000004] starting platform stack v 4.2.....
[    0.000005] initializing cloud-native and hybrid environments: metal, aws, gcp, azure, k8s
[    0.000006] initializing distributed streaming subsystems: kafka, redpanda, flink, kstreams 
[    0.000007] initializing data infra lite: duckdb, rocksdb, adf (and more)
[    0.000008] initializing data infra at large: hudi, delta lake, trino (and more)
[    0.000008] initializing networking & connectivity stack: envoy, kong (and more)
[    0.000009] initializing more MAD landscape: vector databases, RAG, real-time features, time series forecasting (not exhaustive)
[    0.000010] spawning our inner daemons: oss, community
[    1.234567] fast init done. do whatever to continue

platformatory 20.24 LTS lifeuniverseandeverything tty1
<p class="prompt" style="border-right: .1em solid orange">guest@platformatory:~$</p>
</div>
</script>
</section>

<section data-markdown>
<script type="text/template">
### Platform and Product Engineering, by humans, for humans and to humans

> A product is useless without a platform, or more precisely and accurately, a platform-less product will always be replaced by an equivalent platform-ized product – Steve Yegge
<div class="small-text" style="font-size: medium;">
Our "platform" engineering ethos is simple. <br />  

1. Raise the bar on engineering and operations, internally
  - A minimum viable level of self service, for just about anything. 
2. Uplevel your state productization, externally: XaaS: your <em>company as a service</em>.  

</div>
</script>
</section>

<section data-markdown>
<script type="text/template">
## Speciality
Ubiquitous Distributed Systems Interfacs

> Platforms are temporary. APIs are for ever

Almost forever. Some APIs habe become the gold standard for their category. We specialize on and build on top of number of ubiquitous interfaces like Kubernetes, Apache Kafka, Cassandra, Postgres, Apache Iceberg (among others).


</script>
</section>

<section>
    <div style="display: flex;">
        <div style="flex: 1; padding: 10px;">
	<section data-markdown>
	<script type="text/template">
            ## Left Column
            > A product is useless without a platform, or more precisely and accurately, a platform-less product will always be replaced by an equivalent platform-ized product – Steve Yegge
	</script></section>
        </div>
        <div style="flex: 1; padding: 10px;">
            ## Right Column
            Our "platform" engineering ethos is simple. <br />
            1. Raise the bar on engineering and operations, internally
              - A minimum viable level of self service, for just about anything.
            2. Uplevel your state of productization, externally: XaaS: your <em>company as a service</em>.
        </div>
    </div>
</section>

<section>
    <script type="module">
        import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
        mermaid.initialize({ startOnLoad: true });
    </script>
    <div class="mermaid">
        graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    </div>
</section>

<section data-markdown data-background-color="#ff0000">
<script type="text/template">
## Slide 4
Content for slide 4 with a custom background color.
</script>
</section>

