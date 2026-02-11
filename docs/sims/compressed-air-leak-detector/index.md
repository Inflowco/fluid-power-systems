---
title: Compressed Air Leak Detector
description: Interactive MicroSim where students use an ultrasonic leak detector to diagnose compressed air leaks and prioritize repairs by cost impact.
quality_score: 82
image: /sims/compressed-air-leak-detector/compressed-air-leak-detector.png
og:image: /sims/compressed-air-leak-detector/compressed-air-leak-detector.png
twitter:image: /sims/compressed-air-leak-detector/compressed-air-leak-detector.png
social:
   cards: false
---

# Compressed Air Leak Detector

<iframe src="main.html" height="700px" scrolling="no"></iframe>

[Run the Compressed Air Leak Detector MicroSim](main.html){ .md-button .md-button--primary }

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/fluid-power-systems/sims/compressed-air-leak-detector/main.html" height="700px" scrolling="no"></iframe>
```

## About this MicroSim

This interactive simulation lets students use an ultrasonic leak detector to find compressed air leaks throughout a system schematic, then prioritize repairs based on cost impact analysis following the Pareto principle.

Students probe 8 potential leak locations on a compressed air system including couplings, thread fittings, hose connections, valve stems, FRL drains, quick-connects, regulator vents, and cylinder seals. Each scenario randomly generates 4 to 6 leaks of varying sizes (small, medium, large). The acoustic intensity meter displays the detected sound level, and the cost estimator shows the estimated CFM loss and annual dollar cost for each leak.

After probing and tagging leaks, students must prioritize repairs by cost impact, learning to apply the Pareto principle to maintenance decisions. A score is calculated based on correctly identifying actual leaks, avoiding false positives, and correct prioritization ordering.

### How to Use

1. **Probe test points** - Click on the numbered circles on the system schematic to measure acoustic intensity at each location
2. **Read the meter** - Higher dB readings indicate larger leaks; green readings indicate no leak, orange/red indicate significant leaks
3. **Tag leaks** - When you detect a leak, click the "Tag Leak" button to record it in the report table
4. **Adjust electricity rate** - Use the slider to see how electricity costs affect the annual cost of each leak
5. **Prioritize** - After tagging all suspected leaks, click "Prioritize" to sort them by cost impact and receive a score
6. **New Scenario** - Click "New Scenario" to generate a fresh random set of leaks

## Learning Objective

Students will be able to diagnose compressed air leaks using acoustic detection data and prioritize repairs based on cost impact analysis.

## Lesson Plan

### Target Audience

Technical students, HVAC/R technicians, and facilities maintenance personnel studying compressed air systems.

### Prerequisites

- Basic understanding of compressed air system components (compressor, receiver, dryer, FRLs)
- Familiarity with the concept of air leaks and their impact on energy costs
- Understanding of units: CFM (cubic feet per minute), dB (decibels), kWh (kilowatt-hours)

### Learning Activities

1. **Introduction (5 min)**: Discuss how compressed air leaks account for 20-30% of compressor output in a typical facility and why systematic leak detection is important.

2. **Guided Exploration (10 min)**: Walk through one scenario together as a class. Demonstrate how to probe each test point, interpret the acoustic meter, and tag leaks.

3. **Independent Practice (15 min)**: Students complete 2-3 scenarios independently, aiming for a score of 80% or higher. Encourage them to probe all 8 points before tagging any leaks.

4. **Cost Analysis Discussion (10 min)**: Adjust the electricity rate slider and observe how costs change. Discuss the relationship between electricity rates and the payback period for leak repairs.

5. **Prioritization Exercise (10 min)**: After identifying all leaks, students discuss why prioritizing by cost impact (largest savings first) is more effective than fixing leaks in order of discovery.

### Assessment

- Students should achieve a score of 80% or higher on at least two consecutive scenarios
- Students should be able to explain the relationship between acoustic intensity and leak size
- Students should articulate why cost-based prioritization is preferred over random repair ordering

## References

1. [Compressed Air Challenge - Best Practices for Compressed Air Systems](https://www.compressedairchallenge.org/) - Industry best practices for compressed air system management and leak detection
2. [US DOE Compressed Air Systems Tip Sheet](https://www.energy.gov/eere/amo/compressed-air-systems) - Department of Energy guidance on compressed air energy savings
3. [Ultrasonic Leak Detection Methods](https://www.uesystems.com/technology/ultrasound/) - Overview of ultrasonic acoustic detection technology for finding pressurized gas leaks
