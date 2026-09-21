---
layout: page
title: GALLERY
permalink: /gallery/
description: A visual notebook of places, details, and ideas beyond the laboratory.
# To reopen the Gallery, set both options below to true.
nav: false
nav_order: 6
published: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/gallery.css' | relative_url }}">
<script src="{{ '/assets/js/gallery.js' | relative_url }}" defer></script>

<section class="gallery-intro" aria-labelledby="gallery-intro-title">
  <div class="gallery-intro-copy">
    <p class="gallery-kicker">VISUAL NOTEBOOK / BEYOND THE LAB</p>
    <h2 id="gallery-intro-title">Observation does not stop at the beamline.</h2>
    <p>I am drawn to patterns, atmosphere, and designed worlds—whether they appear in a landscape, a city, a quiet daily detail, or an imagined game environment. This gallery is a place for those observations.</p>
  </div>
  <div class="gallery-interests" aria-label="Personal interests">
    <span>Photography</span>
    <span>Travel</span>
    <span>Games &amp; worldbuilding</span>
    <span>Visual systems</span>
  </div>
</section>

<div class="gallery-toolbar">
  <div class="gallery-filters" role="group" aria-label="Filter gallery entries">
    <button class="gallery-filter" type="button" data-gallery-filter="all" aria-pressed="true">All</button>
    <button class="gallery-filter" type="button" data-gallery-filter="landscapes" aria-pressed="false">Landscapes</button>
    <button class="gallery-filter" type="button" data-gallery-filter="places" aria-pressed="false">Places</button>
    <button class="gallery-filter" type="button" data-gallery-filter="details" aria-pressed="false">Details</button>
    <button class="gallery-filter" type="button" data-gallery-filter="everyday" aria-pressed="false">Everyday</button>
  </div>
  <p class="gallery-count" data-gallery-count aria-live="polite">{{ site.data.gallery | size }} entries</p>
</div>

<div class="gallery-grid" data-gallery>
  {% for entry in site.data.gallery %}
    <article class="gallery-card{% if entry.featured %} gallery-card--featured{% endif %}" data-gallery-category="{{ entry.category }}">
      <img src="{{ entry.image | relative_url }}" alt="{{ entry.alt }}" {% if entry.featured %}loading="eager"{% else %}loading="lazy"{% endif %}>
      <div class="gallery-card-content">
        <div class="gallery-card-meta">
          <span>{{ entry.category_label }}</span>
          {% if entry.sample %}<span class="gallery-sample-badge">Layout sample</span>{% endif %}
        </div>
        <h3>{{ entry.title }}</h3>
        <p>{{ entry.caption }}</p>
      </div>
    </article>
  {% endfor %}
</div>

<aside class="gallery-draft-note">
  <strong>Ready for your photographs</strong>
  <span>The current images come from the al-folio template and demonstrate the finished layout only. Each entry can be replaced independently in <code>_data/gallery.yml</code> without changing the page design.</span>
</aside>
