---
layout: default
name: Publications
download_link: https://github.com/p6
recording_link: https://youtube.com
event_reference: http://platformatory.io/events/foo
google_slides: http://slides.google.com/
url: http://grahana.net
authors: Avinash U, Pavan K
---

<h1>Publications</h1>

<div class="publications-grid">
    {% for publication in site.publications %}
        <div class="publication-item">
            <strong>{{ publication.name }}</strong><br>
            Authors: <span class="authors">{{ publication.authors }}</span><br>
            {{ publication.description }}<br>
            {% if publication.download_link %}
                <a href="{{ publication.download_link }}" target="_blank">Download</a><br>
            {% endif %}
            {% if publication.recording_link %}
                <a href="{{ publication.recording_link }}" target="_blank">Watch Recording</a><br>
            {% endif %}
            {% if publication.event_reference %}
                Referenced Event: <a href="{{ publication.event_reference }}" target="_blank">Link</a><br>
            {% endif %}
            {% if publication.google_slides %}
                <iframe src="{{ publication.google_slides }}" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe><br>
            {% endif %}
            <a href="{{ publication.url }}">Read more</a>
        </div>
    {% endfor %}
</div>
