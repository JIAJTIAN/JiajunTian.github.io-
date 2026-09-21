---
layout: page
title: Model-monitored ASAXS extraction
description: Physics-guided separation of resonant and non-resonant scattering components.
importance: 2
category: software
related_publications: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">

This work develops quantitative methods for separating element-specific structure from energy-dependent anomalous small-angle X-ray scattering measurements. Current applications include diselenide-containing liquid-crystal elastomers and Au@SiO₂ core-shell nanoparticles, where resonant and non-resonant contributions overlap in the measured intensity.

## Scientific approach

The workflow combines absorption-edge information, energy-aware q grids, uncertainty propagation, and physical form-factor models. A model-monitored extraction method uses a core-shell sphere description as a soft structural guide while allowing smooth data-driven departures from the model. This is designed to reduce unstable cancellation between scattering components without treating the physical model as exact.

## Focus areas

- Energy-series preprocessing and normalization
- Resonant and non-resonant component separation
- Physics-based model fitting
- Uncertainty and fit-quality assessment
- Reproducible plots and data exports
- Comparison of classical, rigid-model, and model-monitored extraction
- Model-sensitivity envelopes and residual diagnostics

This analysis connects directly to XAnoS/XModFit-compatible workflows and to the FrameByFrame-ASWAXS reduction platform. The diselenide-elastomer modeling contributed to a 2026 Chemistry of Materials publication; the core-shell extraction workflow remains active research software under validation.
