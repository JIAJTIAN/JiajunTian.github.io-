---
layout: page
title: ASWAXS Collector
description: Bluesky-based acquisition and queue-control tools for beamline ASWAXS experiments.
importance: 3
category: software
related_publications: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">

ASWAXS Collector helps turn a measurement plan into a repeatable beamline sequence. It provides graphical queue controls and reusable Bluesky plans for coordinating detectors, motion, energy scans, and sample environments, while recording metadata for subsequent analysis.

## My role

I develop acquisition plans and operator interfaces around the needs of our experiments, integrating detectors, motors, cameras, triggering, and sample environments.

## Capabilities

- Builds graphical controls from the plans allowed by a Bluesky Queue Server.
- Creates, edits, saves, reloads, and executes reusable experiment queues.
- Supports timed measurements, scans, grid scans, multi-motor sequences, energy-nested measurements, XRF energy scans, ASWAXS energy scans, flow switching, and capillary transmission workflows.
- Coordinates areaDetector/HDF5 acquisition with EPICS devices and sample-environment controls.
- Supports synchronized X-ray, UV-Vis, optical-imaging, and flow-control workflows for multimodal in situ experiments.
- Preserves measurement metadata for downstream FrameByFrame-ASWAXS reduction and analysis.

## Commissioning use

For the first user nanoparticle ASAXS test on the new setup, I developed and validated an energy-scan workflow and automatic sample-position capture. Together with post-analysis software, this supported the measurement and recovery of the resonant-scattering response.

## Technical foundation

Python, Bluesky, Bluesky Queue Server, PyQt, ophyd, EPICS, areaDetector, HDF5, and beamline-specific device integration.

> **Project status:** Active internal beamline software; a public release is not yet available.
