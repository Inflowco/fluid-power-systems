---
title: Compressed Air Energy Comparison
description: Interactive comparison of energy consumption across four compressor types and four control strategies with adjustable parameters for system load, electricity rate, and operating hours.
quality_score: 82
image: /sims/compressed-air-energy-comparison/compressed-air-energy-comparison.png
og:image: /sims/compressed-air-energy-comparison/compressed-air-energy-comparison.png
---

# Compressed Air Energy Comparison

<iframe src="main.html" width="100%" height="600px" scrolling="no"></iframe>

[Run the Compressed Air Energy Comparison MicroSim](main.html){ .md-button .md-button--primary }

```html
<iframe src="https://dmccreary.github.io/fluid-power-systems/sims/compressed-air-energy-comparison/main.html" width="100%" height="600px"></iframe>
```

## About this MicroSim

This interactive comparison shows energy consumption and costs across four compressor types and four control strategies, with adjustable parameters for system load, electricity rate, and operating hours to help students evaluate and justify energy-efficient compressed air system designs.

The left panel displays four compressor types (Reciprocating, Rotary Screw, Rotary Vane, and Centrifugal) with their specific power ratings, annual costs, efficiency ratings, and part-load efficiency curves. The right panel compares four control strategies (Load/Unload, Modulation, VFD, and VFD + Storage) showing annual energy consumption, cost, and percentage savings versus the baseline. The bottom panel provides a combined grouped bar chart with cost line overlays and highlights the best combination.

### Interactive Controls

- **Average System Load** slider (25% to 100%) -- adjust the proportion of rated capacity the system operates at
- **Electricity Rate** slider ($0.08 to $0.25 per kWh) -- set the local electricity cost
- **Operating Hours per Year** slider (2,000 to 8,760 hours) -- configure annual run time
- **System Size** dropdown (25 HP, 50 HP, 100 HP, 200 HP) -- select compressor motor size
- **Show CO2 Impact** toggle -- display annual carbon dioxide emissions data

### Key Behaviors to Observe

- At partial loads, VFD control shows dramatic energy savings compared to Load/Unload and especially Modulation
- Centrifugal compressors exhibit an efficiency cliff below approximately 60% load due to surge risk
- Rotary Screw with VFD is the optimal choice for most medium-sized industrial systems
- Higher electricity rates amplify the cost advantage of energy-efficient combinations

## Learning Objective

Students will be able to assess the energy consumption and cost of different compressor types and control strategies, and justify recommendations for energy-efficient compressed air system design.

## Lesson Plan

### Target Audience

Technical students and facility engineers studying compressed air system optimization, typically at the undergraduate or adult continuing education level.

### Prerequisites

- Basic understanding of compressed air system components
- Familiarity with electrical energy units (kW, kWh)
- Understanding of compressor operating principles (Chapter 5)

### Learning Activities

1. **Baseline Exploration (10 min)**: Set the system to 100 HP, 100% load, and $0.12/kWh. Compare the four compressor types at full load. Which has the lowest specific power? Why?

2. **Part-Load Investigation (15 min)**: Reduce the system load to 50% and then 25%. Observe how each control strategy responds. Document which strategy provides the greatest savings at each load level. Toggle CO2 to see environmental impact.

3. **Centrifugal Surge Analysis (10 min)**: With the centrifugal compressor visible in the bottom chart, decrease load from 100% to 25%. Identify the load percentage where centrifugal efficiency drops sharply. Explain why this occurs and what it means for system design.

4. **Economic Justification Exercise (15 min)**: For a 200 HP system operating 8,760 hours per year at $0.20/kWh and 50% average load, calculate the annual savings of upgrading from Load/Unload to VFD + Storage control. Write a one-paragraph justification memo.

5. **System Design Recommendation (15 min)**: Given a facility profile (provide specifics), use the tool to determine the best compressor type and control strategy combination. Present findings to the class with supporting data from the visualization.

### Assessment

- Students can correctly identify which compressor type and control strategy minimizes energy consumption for a given set of operating conditions
- Students can explain why VFD control provides greater savings at partial loads than Load/Unload or Modulation
- Students can justify a system design recommendation using quantitative data from the comparison tool

## References

1. [Compressed Air Challenge - Best Practices for Compressed Air Systems](https://www.compressedairchallenge.org/) - Industry resource for compressed air system optimization and training
2. [U.S. DOE - Improving Compressed Air System Performance](https://www.energy.gov/eere/amo/improving-compressed-air-system-performance-sourcebook-industry) - Sourcebook covering compressor types, control strategies, and energy efficiency measures
3. [Chart.js Documentation](https://www.chartjs.org/docs/latest/) - JavaScript charting library used for the interactive visualizations
4. [EPA eGRID - Emissions & Generation Resource Integrated Database](https://www.epa.gov/egrid) - Source for CO2 emissions factors used in environmental impact calculations
