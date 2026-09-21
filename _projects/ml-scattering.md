---
layout: page
title: Physics-informed scattering benchmarks
description: Simulated datasets and validation tools for data-driven scattering analysis.
importance: 4
category: software
related_publications: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">

This exploratory project asks when data-driven methods can make scattering analysis faster and when their predictions become unreliable. I use simulated scattering patterns with known parameters to test inference methods, compare them with conventional fitting, and examine their sensitivity to noise and experimental limitations.

## Current direction

- Generate training data from explicit form-factor and structure-factor models rather than unlabeled experimental curves.
- Represent instrumental noise, q-range limits, backgrounds, polydispersity, and parameter correlations in the simulations.
- Compare learned parameter estimates with conventional fitting and synthetic ground truth.
- Use uncertainty and out-of-distribution checks to identify cases that should return to physics-based fitting or human review.
- Explore rapid feedback for beamtime without allowing a model to replace scientific validation.

> **Project status:** Exploratory research. Benchmark performance and scientific limitations are still being evaluated.
