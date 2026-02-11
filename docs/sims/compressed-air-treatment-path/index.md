---
title: Compressed Air Treatment Path
description: Interactive flow diagram showing compressed air moving through each treatment stage with contaminant levels displayed at each point to illustrate how each component improves air quality.
quality_score: 90
image: /sims/compressed-air-treatment-path/compressed-air-treatment-path.png
og:image: /sims/compressed-air-treatment-path/compressed-air-treatment-path.png
twitter:image: /sims/compressed-air-treatment-path/compressed-air-treatment-path.png
social:
   cards: false
---
# Compressed Air Treatment Path

<iframe src="main.html" height="502px" scrolling="no"></iframe>

[Run the Compressed Air Treatment Path MicroSim](main.html){ .md-button .md-button--primary }

## About this MicroSim

This interactive flow diagram shows compressed air moving through each treatment stage — aftercooler, receiver, pre-filter, dryer, and after-filter — with contamination levels displayed at each point to illustrate how each component improves air quality.

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/fluid-power-systems/sims/compressed-air-treatment-path/main.html" height="502px" scrolling="no"></iframe>
```

## Learning Objective

Students will be able to describe the purpose of each component in a compressed air treatment system and trace the path of air from the compressor through treatment stages to the point of use.

## How to Use

1. **Hover** over any component to see its name, function, and typical specifications.
2. **Click** on any quality bar between components for a detailed contaminant breakdown.
3. **Toggle** between "Refrigerated Dryer" and "Desiccant Dryer" to see how each dryer type affects dew point and downstream air quality.
4. **Adjust** the "Ambient Humidity" slider to see how inlet moisture levels affect the treatment load throughout the system.
5. **Watch** the animated particles flow through the system — blue dots represent air, water droplets condense at the aftercooler and dryer, and oil droplets are captured by filters.

## Lesson Plan

### Objective
Students will trace compressed air from compressor discharge through treatment stages and describe how each component reduces contamination.

### Activities

1. **Predict**: Before interacting, ask students to predict which component removes the most moisture.
2. **Explore**: Have students hover over each component and note its function. Toggle the dryer type and observe the dew point difference.
3. **Analyze**: Adjust the humidity slider to maximum. Which treatment stage is most affected? Why?
4. **Discuss**: Why is the order of treatment stages important? What would happen if the dryer came before the aftercooler?

### Assessment
- Students identify the purpose of each of the 7 treatment stages.
- Students explain the difference between refrigerated and desiccant dryers in terms of dew point achieved.
- Students predict how increased ambient humidity affects condensate load at the aftercooler.

## References

- Compressed Air & Gas Institute (CAGI) — [www.cagi.org](https://www.cagi.org)
- ISO 8573-1: Compressed Air Quality Classes
- Parker Hannifin — Compressed Air Treatment Handbook

**Note:** Remember to capture a screenshot of this MicroSim and save it as `compressed-air-treatment-path.png` in this directory for social media preview images.
