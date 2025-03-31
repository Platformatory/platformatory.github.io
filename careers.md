---
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link
      rel="icon"
      type="image/png"
      href="{{ '/images/logo/favicon.png' | relative_url }}"
    />
    <title>Platformatory Careers</title>
      <link href="{{ '/assets/css/style.css' | relative_url }}" rel="stylesheet">
    <meta name="description" content="Explore exciting career opportunities at Platformatory. Join our innovative team and help shape the future of technology with impactful work and growth opportunities." />
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        #iframe-container {
            flex-grow: 1; 
            overflow: hidden; 
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none; 
        }
    </style>
</head>
<body>
        {% include main-menu-mobile.html %}
        {% include header.html headerClass='header-extra' %}
    <div id="iframe-container">
        <iframe src="https://platformatory-1632407309031.freshteam.com/jobs" name="Platformatory Careers"></iframe>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const myIframe = document.getElementsByName('myIframe')[0];
            myIframe.src = "https://platformatory-1632407309031.freshteam.com/jobs";
        });
    </script>
</body>
</html>
