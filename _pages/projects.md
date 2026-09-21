---
layout: page
title: RESEARCH SOFTWARE
permalink: /software/
description: Scientific software and data-analysis tools developed for X-ray scattering research.
nav: true
nav_order: 4
display_categories: [software]
horizontal: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">

<!-- pages/projects.md -->

I develop scientific software as part of my beamline research. These tools connect acquisition, data reduction, and physical interpretation while preserving the context of each measurement.

<section class="featured-software" aria-labelledby="featured-software-title">
  <p class="professional-motto">FEATURED RESEARCH TOOL</p>
  <h2 id="featured-software-title">FrameByFrame-ASWAXS</h2>
  <p>From detector frames to checked, traceable scattering data. A graphical workflow for guided reduction, frame-stability checks, and recorded processing choices.</p>
  <p><strong>Status:</strong> Active research software; not yet publicly released.</p>
  {% assign featured_tool = site.projects | where: "title", "FrameByFrame-ASWAXS" | first %}
  {% if featured_tool %}
  <a href="{{ featured_tool.url | relative_url }}">Explore FrameByFrame</a>
  {% endif %}
</section>

## Tools across the experiment

ASWAXS Collector coordinates acquisition; FrameByFrame reduces and checks the data; element-specific models support interpretation. Physics-informed benchmarks are exploratory work, separate from these experimental tools.

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
