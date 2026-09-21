---
layout: page
title: FrameByFrame-ASWAXS
description: Guided SAXS, WAXS, and ASAXS reduction from raw detector frames to analysis-ready data.
importance: 1
category: software
related_publications: false
---

<script src="{{ '/assets/js/professional-theme.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/professional-interface.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/professional-light.css' | relative_url }}">

FrameByFrame-ASWAXS turns raw detector frames into checked, traceable scattering data. I develop it for the practical demands of SAXS, WAXS, and ASAXS experiments: consistent reduction, feedback during beamtime, and a clear record of how each result was produced.

## From frames to interpretable data

**Input:** raw detector measurements, calibration and mask files, sample metadata, and experiment-sequence information.

**Output:** reduced scattering curves, propagated uncertainties, quality-control results, and processing history stored in analysis HDF5 files. Raw measurements remain read-only.

## Three core capabilities

- **Guided reduction.** A graphical interface connects calibration, masking, normalization, integration, background subtraction, and SAXS/WAXS stitching.
- **Quality checks during processing.** Frame-stability checks support averaging decisions; online reduction provides near-real-time feedback during measurements.
- **Traceable results.** Geometry, source history, processing parameters, and derived results remain together for subsequent analysis and review.

Batch processing supports single- and dual-detector measurements and energy-resolved ASAXS sequences. Exports connect to XAnoS and related tools for component analysis and model fitting.

## Role in the experimental workflow

Acquisition tools record the measurements. FrameByFrame reduces and checks them. Physical models then test what the resulting curves imply about the material.

## Availability

Active research software; a public release is not yet available. [Contact me](mailto:jiajtian@uchicago.edu) to discuss the workflow or potential collaboration.

<!-- Add a current, permission-cleared interface screenshot here when available. Do not substitute a mock interface. -->

## Technical foundation

Python, PySide6/Qt 6, pyFAI, h5py, NumPy, Matplotlib, pyqtgraph, ZeroMQ, and Bluesky/Kafka integration.
