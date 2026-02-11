---
title: Compressed Air System Optimizer
description: Interactive workflow where students apply energy optimization strategies to a compressed air system and observe the cumulative impact on energy consumption, cost, and CO2 emissions.
quality_score: 82
image: /sims/compressed-air-system-optimizer/compressed-air-system-optimizer.png
og:image: /sims/compressed-air-system-optimizer/compressed-air-system-optimizer.png
twitter:image: /sims/compressed-air-system-optimizer/compressed-air-system-optimizer.png
social:
   cards: false
---
# Compressed Air System Optimizer

<iframe src="main.html" height="900px" scrolling="no"></iframe>

[Run the Compressed Air System Optimizer MicroSim](main.html){ .md-button .md-button--primary }

Place the following line in your website to include this MicroSim in your course:

```html
<iframe src="https://dmccreary.github.io/fluid-power-systems/sims/compressed-air-system-optimizer/main.html" height="900px" scrolling="no"></iframe>
```

## About this MicroSim

This interactive workflow lets students apply energy optimization strategies to a compressed air system -- fixing leaks, reducing pressure, installing VFDs, recovering heat, and eliminating misuse -- and observe the cumulative impact on energy consumption, cost, and CO2 emissions.

Students start with an inefficient baseline system (100 HP rotary screw compressor at 125 psi with 30% leaks) and can toggle five optimization strategies on and off. The energy dashboard updates in real-time showing power draw, annual energy, annual cost, CO2 emissions, and simple payback calculations. An animated system schematic shows where energy flows -- to useful work, heat, leaks, and waste -- with visual indicators for each active optimization.

### How to Use

1. **Review the baseline** -- observe the starting power, cost, and emissions for the inefficient system
2. **Toggle optimization strategies** -- click each switch to apply or remove an optimization
3. **Adjust operating parameters** -- use the sliders to change operating hours and electricity rate
4. **Observe cumulative savings** -- watch the dashboard update as strategies combine
5. **Analyze payback** -- compare investment cost against annual savings for each strategy
6. **Use "Apply All"** to see the maximum achievable savings, then "Reset to Baseline" to start over

## Learning Objective

Students will be able to implement energy optimization strategies for a compressed air system by adjusting system parameters and observing the effect on energy consumption and cost.

## Lesson Plan

### Target Audience

Undergraduate students in facilities management, industrial engineering, or HVAC/R programs. Also suitable for practicing technicians seeking continuing education in energy optimization.

### Prerequisites

- Basic understanding of compressed air systems (compressor types, distribution)
- Familiarity with electrical power units (kW, kWh)
- Understanding of operating costs and simple payback concepts

### Duration

15-20 minutes for guided exploration; 30-40 minutes with discussion and assessment activities.

### Learning Activities

1. **Baseline Analysis (5 min)** -- Students examine the starting system parameters and identify sources of inefficiency. Ask: "Where is energy being wasted in this system?"

2. **Individual Strategy Exploration (5 min)** -- Toggle each optimization one at a time and record the savings percentage. Ask: "Which single strategy provides the greatest energy savings? Why?"

3. **Cumulative Optimization (5 min)** -- Apply strategies in different orders and combinations. Ask: "Do the savings from different strategies simply add up, or is the combined effect different? Why?"

4. **Economic Analysis (5 min)** -- Adjust the electricity rate slider and observe how it affects the payback period. Ask: "At what electricity rate does VFD installation pay back in under one year?"

5. **Operating Hours Sensitivity (5 min)** -- Compare a single-shift operation (2,000 hours) versus continuous operation (8,760 hours). Ask: "How do operating hours affect which optimizations are most cost-effective?"

### Assessment Suggestions

- Have students rank the five strategies by ROI (return on investment) and justify their ranking
- Ask students to calculate the total annual savings at their local electricity rate
- Challenge students to identify which strategies interact (e.g., reducing leaks changes the effective load, affecting VFD savings)

## References

1. [Compressed Air Best Practices](https://www.compressedairbestpractices.com/) - Industry resource for compressed air system optimization
2. [DOE Compressed Air Sourcebook](https://www.energy.gov/eere/amo/compressed-air-systems) - U.S. Department of Energy guide to compressed air system efficiency
3. [CAGI (Compressed Air and Gas Institute)](https://www.cagi.org/) - Industry standards and educational resources for compressed air systems
