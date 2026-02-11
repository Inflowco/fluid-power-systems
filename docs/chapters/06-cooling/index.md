---
title: Chapter 6 - Cooling Water Systems and Smart Monitoring
description: Cooling water fundamentals, cooling tower types and operations, water distribution systems, water treatment principles, corrosion prevention, scale prevention, water quality monitoring and parameters, AI-driven smart monitoring and predictive maintenance, and energy efficiency strategies
generated_by: claude skill chapter-content-generator
date: 2026-02-10
version: 0.04
---

# Chapter 6: Cooling Water Systems and Smart Monitoring

## Summary

This chapter introduces cooling water systems as essential infrastructure in industrial facilities, data centers, power plants, and commercial buildings. Students will learn how cooling water systems reject waste heat from processes and equipment, starting with the fundamentals of heat transfer and the cooling water cycle. The chapter covers the major cooling tower types — natural draft, mechanical draft (forced and induced), crossflow, and counterflow — and explains how cooling water is distributed through pumps, piping, and heat exchangers. Students will study water treatment principles including chemical treatment, biocides, and pH control, then advance to corrosion prevention strategies (types of corrosion, inhibitors, material selection) and scale prevention (causes, treatment, monitoring). The chapter covers water quality monitoring parameters — conductivity, pH, alkalinity, hardness, and total dissolved solids (TDS) — and then introduces AI-driven smart monitoring and predictive maintenance that uses IoT sensors and machine learning to detect developing problems before they cause equipment damage or unplanned downtime. The chapter concludes with energy efficiency and sustainability strategies, including water recycling, blowdown optimization, and free cooling.

## Concepts Covered

1. Cooling water fundamentals — heat rejection, the cooling water cycle, and system components
2. Cooling tower types — natural draft, mechanical draft (forced and induced draft), crossflow, and counterflow designs
3. Cooling water distribution — circulating pumps, piping systems, and heat exchangers
4. Water treatment principles — chemical treatment, biocides, pH control, and treatment programs
5. Corrosion prevention — types of corrosion, corrosion inhibitors, and material selection
6. Scale prevention — causes of scale formation, treatment methods, and monitoring techniques
7. Water quality monitoring — conductivity, pH, alkalinity, hardness, TDS, and other key parameters
8. IoT sensors for water quality — continuous monitoring of chemical and physical parameters
9. AI-driven smart monitoring — machine learning for anomaly detection and trend analysis
10. Predictive maintenance for cooling systems — predicting pump failures, fouling, and corrosion events
11. Energy efficiency in cooling water systems — VFDs, free cooling, approach temperature optimization
12. Sustainability — water recycling, blowdown optimization, and environmental compliance

## Prerequisites

- Chapter 1: Introduction to Fluid Power Systems and AI (understanding of fluid types, basic system concepts, and the role of AI)
- Chapter 2: System Components and Smart Controls (knowledge of pumps, fans, compressors, valves, filters, PLCs, and IoT sensors)
- Chapter 3: HVAC Systems with AI Optimization (understanding of refrigerant cycles, heat transfer, maintenance procedures, and AI-driven controls)
- Chapter 4: Vacuum Systems and Data-Driven Maintenance (understanding of pressure measurement, leak detection methods, and predictive maintenance concepts)
- Chapter 5: Compressed Air Systems and Efficiency (understanding of system efficiency, energy optimization, and AI-driven diagnostics)

---

## 6.1 What Is a Cooling Water System?

A **cooling water system** removes waste heat from industrial processes, equipment, and buildings by circulating water through heat-producing equipment and then rejecting that heat to the atmosphere. Every facility that generates significant heat — from a data center full of servers to a chemical plant running exothermic reactions to a commercial building's air conditioning system — relies on cooling water to keep equipment at safe operating temperatures.

The basic principle is simple. Water absorbs heat from a process (such as a condenser, compressor jacket, or injection mold) as it passes through a heat exchanger. The heated water then travels to a cooling tower or other heat rejection device, where it gives up that heat to the atmosphere. The cooled water returns to the process to absorb more heat, completing the cycle. This continuous loop of absorbing heat, rejecting heat, and recirculating is the cooling water cycle.

Cooling water systems are found in virtually every industry:

- **Power generation** — steam turbine condensers require enormous volumes of cooling water
- **Chemical and petrochemical plants** — reactors, distillation columns, and compressors generate process heat
- **Data centers** — servers generate heat that must be removed to prevent equipment damage and maintain reliability
- **HVAC** — chiller condensers reject the heat removed from buildings
- **Manufacturing** — injection molding, metal casting, welding, and machining all produce heat
- **Food and beverage** — pasteurization, sterilization, and refrigeration systems reject heat through cooling water

| System Characteristic | Typical Value |
|----------------------|---------------|
| Supply temperature (to process) | 80–85°F (27–29°C) |
| Return temperature (from process) | 95–105°F (35–41°C) |
| Temperature range (delta T) | 10–20°F (6–11°C) |
| Typical flow rate (medium facility) | 500–5,000 GPM |
| Cycles of concentration | 3–6 (open recirculating) |
| Makeup water requirement | 2–5% of circulation rate |
| Average system life | 20–30 years |

There are three basic types of cooling water systems:

- **Once-through systems** — water is drawn from a natural source (river, lake, ocean), passed through the heat exchanger once, and discharged back to the source at a higher temperature. These systems are simple but use enormous quantities of water and face environmental restrictions on thermal discharge.
- **Open recirculating systems** — the most common type in industrial facilities. Water circulates in a loop between the heat exchangers and a cooling tower. The tower rejects heat to the atmosphere through evaporation. A small amount of water is lost to evaporation, drift, and blowdown, and is replaced by makeup water.
- **Closed recirculating systems** — water circulates in a sealed loop between the heat exchangers and a secondary heat rejection device (such as a fluid cooler or dry cooler). The water does not contact the atmosphere, so it stays cleaner and requires less chemical treatment. These systems are used where water quality must be tightly controlled.

!!! tip "Why Cooling Water Matters for Technicians"
    Cooling water system failures can shut down entire production lines in minutes. A fouled heat exchanger that cannot reject enough heat will cause process temperatures to rise above safe limits, triggering automatic shutdowns. A corroded pipe that develops a leak can flood equipment rooms and contaminate processes. Understanding cooling water fundamentals helps you prevent these costly failures through proper monitoring and maintenance.

## 6.2 Cooling Tower Types and Operations

A **cooling tower** is the heart of an open recirculating cooling water system. It rejects heat from the warm return water to the atmosphere, primarily through evaporation. When water evaporates, it absorbs a large amount of energy (approximately 1,000 BTU per pound of water evaporated), which is far more efficient than simply warming the air. About 80 percent of the heat rejection in a cooling tower occurs through evaporation; the remaining 20 percent occurs through sensible heat transfer (warming the air).

### 6.2.1 Natural Draft Cooling Towers

A **natural draft cooling tower** uses the buoyancy of warm, moist air to create airflow through the tower without any fans. These towers are the massive hyperboloid (hourglass-shaped) concrete structures seen at large power plants. The warm, moist air inside the tower is less dense than the cooler, drier air outside. This density difference creates a natural updraft that draws air up through the tower.

Key characteristics of natural draft towers:

- **Height**: 300–600 feet tall (the height creates the draft)
- **Capacity**: Very high — designed for large power plant condensers
- **Energy use**: Zero fan energy (the main advantage)
- **Cost**: Very high initial cost due to massive concrete structure
- **Applications**: Large power plants (nuclear, coal, gas)
- **Limitation**: Performance depends on ambient weather conditions

### 6.2.2 Mechanical Draft Cooling Towers

**Mechanical draft cooling towers** use fans to force or induce air through the tower, giving the operator control over airflow independent of weather conditions. They are much smaller and less expensive than natural draft towers, and are the type used in the vast majority of industrial and commercial applications.

There are two subtypes based on fan placement:

- **Forced draft** — the fan is located at the air inlet (bottom or side) and pushes air through the tower fill and up past the falling water. Advantages: the fan is accessible for maintenance and operates in clean, cool air. Disadvantage: the discharged moist air can recirculate back into the fan inlet, reducing performance.
- **Induced draft** — the fan is located at the top of the tower and pulls air upward through the fill. Advantages: better air distribution, less recirculation, lower noise at ground level. Disadvantage: the fan operates in the warm, moist discharge air, which increases motor load and exposes the fan to corrosive conditions.

Induced draft towers are more common than forced draft in industrial applications because of their superior performance and lower recirculation risk.

### 6.2.3 Crossflow vs. Counterflow

In addition to draft type, cooling towers are classified by the relative direction of air and water flow:

- **Crossflow** — air flows horizontally through the tower fill while water falls vertically by gravity. The water distribution basin is open at the top, and the fill is arranged in vertical banks on the sides of the tower. Crossflow towers are simpler to maintain because the distribution basins and fill are accessible from outside the tower.
- **Counterflow** — air flows upward through the tower fill directly opposite to the falling water. The water is distributed by pressurized spray nozzles above the fill. Counterflow towers are more thermally efficient because the coldest air contacts the coldest water at the bottom, maximizing the temperature difference. However, the spray nozzles are inside the tower and harder to service.

#### Diagram: Cooling Tower Types

<iframe src="../../sims/cooling-tower-types/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Tower Types</summary>
Type: diagram

Bloom Taxonomy: Understand (L2)
Bloom Verb: compare, classify
Learning Objective: Students will be able to compare the operating principles of different cooling tower types and classify each by its airflow pattern and draft method.

Purpose: Animated cross-section diagrams showing the internal operation of four cooling tower configurations with water and air flow paths

Layout: 2x2 grid of animated tower cross-sections, each with labels and a summary card below

Grid positions:
1. Top-left — Natural Draft Tower:
   - Tall hyperboloid concrete shell
   - Water sprayed onto fill media at the base
   - Warm moist air rising naturally through tower
   - Air entering at base through louvers
   - Labels: "Concrete Shell," "Fill Media," "Water Distribution," "Air Inlet," "Warm Air Discharge," "Basin"

2. Top-right — Induced Draft (Counterflow):
   - Fan at top pulling air upward
   - Water sprayed downward through fill
   - Air and water flowing in opposite directions
   - Labels: "Fan," "Motor," "Drift Eliminators," "Spray Nozzles," "Fill Media," "Cold Water Basin"

3. Bottom-left — Forced Draft (Crossflow):
   - Fan at side pushing air horizontally
   - Water falling vertically through fill banks on sides
   - Open distribution basin at top
   - Labels: "Fan," "Fill Media," "Distribution Basin," "Air Inlet," "Cold Water Basin"

4. Bottom-right — Induced Draft (Crossflow):
   - Fan at top pulling air inward from sides
   - Water falling vertically through fill on both sides
   - Air flowing horizontally through fill then up through fan
   - Labels: "Fan," "Fill Media," "Hot Water Basin," "Louvers," "Cold Water Basin"

Summary card below each tower:
- Draft type (Natural/Forced/Induced)
- Flow pattern (Crossflow/Counterflow)
- Fan energy (None/Low/Medium)
- Thermal efficiency (Good/Better/Best)
- Best for: (1-2 application examples)

Interactive elements:
- Click any tower to pause/play its animation
- Hover over labels for detailed explanations
- Toggle button: "Show Air Flow" highlights air path with blue arrows
- Toggle button: "Show Water Flow" highlights water path with green arrows

Color scheme: Blue for cool air, red/orange for warm air, light blue for cool water, orange for warm water, gray for structure
Responsive design: Grid adjusts from 2x2 to single column on narrow screens. Must respond to window resize events.

Implementation: p5.js with animated air and water flow paths and interactive hover tooltips
</details>

| Feature | Natural Draft | Induced Draft (Counterflow) | Induced Draft (Crossflow) | Forced Draft |
|---------|--------------|---------------------------|--------------------------|-------------|
| Fan energy | None | Medium | Medium | Medium |
| Thermal efficiency | Good | Best | Good | Good |
| Maintenance access | Difficult | Moderate | Easy | Easy |
| Recirculation risk | None | Low | Low | High |
| Noise at ground level | Low | Low | Low | High |
| Initial cost | Very high | Medium | Medium | Low–Medium |
| Best for | Large power plants | Industrial, data centers | Commercial HVAC | Small industrial |

### 6.2.4 Key Cooling Tower Terms

Understanding cooling tower performance requires familiarity with these terms:

- **Range** — the temperature difference between the hot water entering the tower and the cold water leaving. A tower receiving 100°F water and producing 85°F water has a 15°F range.
- **Approach** — the temperature difference between the cold water leaving the tower and the ambient wet-bulb temperature. If the cold water is 85°F and the wet-bulb temperature is 78°F, the approach is 7°F. Lower approach means higher performance but requires a larger, more expensive tower.
- **Wet-bulb temperature** — the lowest temperature that can be achieved by evaporative cooling. It is the theoretical limit for cooling tower performance. A tower cannot cool water below the wet-bulb temperature.
- **Drift** — tiny water droplets carried out of the tower by the air discharge. Drift eliminators reduce this loss to less than 0.001% of the circulation rate.
- **Blowdown** — water intentionally drained from the system to control the concentration of dissolved solids. As water evaporates in the tower, dissolved minerals remain behind and concentrate.
- **Makeup water** — fresh water added to replace losses from evaporation, drift, and blowdown.
- **Cycles of concentration (COC)** — the ratio of dissolved solids in the circulating water to dissolved solids in the makeup water. Higher COC means less makeup water and blowdown are needed, but increases the risk of scaling and corrosion.

\[ \text{COC} = \frac{\text{TDS in circulating water}}{\text{TDS in makeup water}} \]

\[ \text{Makeup} = \text{Evaporation} + \text{Drift} + \text{Blowdown} \]

The heat rejected by a cooling tower can be calculated from the water flow rate and temperature change:

\[ Q \text{ (BTU/hr)} = \text{GPM} \times 500 \times \Delta T \]

where GPM is the condenser water flow rate, \( \Delta T \) is the temperature difference in °F, and the constant 500 accounts for water's density (8.33 lb/gal) multiplied by specific heat (1.0 BTU/lb·°F) multiplied by 60 min/hr (= 499.8, rounded to 500).

#### Worked Example: Heat Rejection

**Given:**

- Cooling tower handling 800 GPM condenser water
- 85°F supply temperature to chiller
- 95°F return temperature from chiller

**Find:** Heat rejection in BTU/hr and tons of cooling

**Solution:**

1. Calculate the temperature difference:

\[ \Delta T = 95°F - 85°F = 10°F \]

2. Calculate heat rejection using the cooling water heat equation:

\[ Q = 800 \text{ GPM} \times 500 \times 10°F = 4{,}000{,}000 \text{ BTU/hr} \]

3. Convert to tons of cooling (1 ton = 12,000 BTU/hr):

\[ \text{Tons} = \frac{4{,}000{,}000}{12{,}000} = 333 \text{ tons} \]

**Answer:** The heat rejection is **4,000,000 BTU/hr**, equivalent to **333 tons** of cooling.

> **Practical note:** The "500" constant is one of the most useful numbers in HVAC and cooling water calculations. It accounts for water's density (8.33 lb/gal) times specific heat (1.0 BTU/lb·°F) times 60 min/hr = 499.8, rounded to 500. This constant only applies to water — for glycol solutions or other fluids, the density and specific heat must be adjusted.

## 6.3 Cooling Water Distribution

The distribution system connects the cooling tower to the heat-producing equipment. It includes circulating pumps, piping, valves, and heat exchangers that work together to deliver cool water where it is needed and return warm water to the tower for cooling.

### 6.3.1 Circulating Pumps

**Circulating pumps** drive the cooling water through the entire system. In most facilities, these are centrifugal pumps sized for the total flow rate and pressure drop of the system. Key considerations include:

- **Flow rate** — sized to deliver the required GPM to all heat exchangers in the system
- **Head pressure** — must overcome the total friction loss in piping, fittings, valves, and heat exchangers, plus any elevation difference between the basin and the highest point in the system
- **Redundancy** — critical systems use multiple pumps (one running, one standby) to ensure continuous cooling if a pump fails
- **VFD control** — variable frequency drives allow pump speed to adjust based on actual cooling demand, saving significant energy during partial load conditions

### 6.3.2 Heat Exchangers

**Heat exchangers** are the devices where heat transfers from the process to the cooling water. The three most common types in cooling water service are:

- **Shell-and-tube** — the workhorse of industrial cooling. One fluid flows through a bundle of tubes while the other flows around the tubes inside a shell. Robust, easy to clean, and available in a wide range of materials and sizes.
- **Plate-and-frame** — thin corrugated metal plates stacked together with gaskets. The two fluids flow in alternating channels between plates. Very high heat transfer efficiency in a compact size, but more sensitive to fouling and harder to clean than shell-and-tube.
- **Plate-and-shell** — combines plate heat transfer efficiency with shell-and-tube robustness. Used in applications requiring both high performance and mechanical strength.

| Heat Exchanger Type | Heat Transfer Efficiency | Fouling Tolerance | Cleanability | Size | Cost |
|--------------------|------------------------|-------------------|-------------|------|------|
| Shell-and-tube | Good | High | Easy (tube side) | Large | Medium |
| Plate-and-frame | Excellent | Low | Moderate | Compact | Medium–High |
| Plate-and-shell | Very good | Moderate | Moderate | Compact | High |

### 6.3.3 Piping and Valves

Cooling water piping is typically carbon steel or, in corrosive applications, stainless steel, fiberglass-reinforced plastic (FRP), or PVC (for low-pressure applications). Key design considerations include:

- **Velocity** — water velocity in cooling water piping should be maintained between 3 and 8 feet per second. Below 3 fps, sediment settles and biological growth accelerates. Above 8 fps, erosion-corrosion increases, especially at elbows and tees.
- **Pipe sizing** — sized to maintain the velocity range above while keeping total system pressure drop within the pump's capacity
- **Isolation valves** — allow individual heat exchangers or sections to be isolated for maintenance without shutting down the entire system
- **Balancing valves** — ensure proper flow distribution to each heat exchanger. Without balancing, some exchangers receive too much flow and others too little.
- **Strainers** — installed upstream of heat exchangers to catch debris (leaves, insects, scale particles) that could foul heat transfer surfaces

!!! warning "Maintain Minimum Water Velocity"
    Water velocity below 3 feet per second in cooling water piping creates conditions that accelerate biological growth, sediment accumulation, and under-deposit corrosion. Stagnant or slow-moving water is the number one cause of localized corrosion pitting in cooling water systems. Always verify that design flow velocities are maintained, especially in dead-leg piping sections.

## 6.4 Water Treatment Principles

Cooling water picks up and concentrates contaminants as it circulates. The evaporation process in the cooling tower removes pure water, leaving behind dissolved minerals, suspended solids, biological organisms, and airborne debris. Without proper treatment, these contaminants cause three major problems: **corrosion**, **scale**, and **biological fouling** — the "big three" of cooling water chemistry. A comprehensive water treatment program addresses all three simultaneously.

### 6.4.1 The Three Enemies of Cooling Water Systems

- **Corrosion** — the electrochemical destruction of metal surfaces. Corrosion thins pipe walls, perforates heat exchanger tubes, and generates rust and metal oxide particles that foul the system. (Covered in detail in Section 6.5.)
- **Scale** — mineral deposits (primarily calcium carbonate and calcium sulfate) that form on heat transfer surfaces. Scale acts as insulation, reducing heat exchanger efficiency and increasing energy consumption. (Covered in detail in Section 6.6.)
- **Biological fouling** — the growth of bacteria, algae, fungi, and biofilm in the cooling water. Biological fouling clogs heat exchangers, degrades heat transfer, and creates conditions for under-deposit corrosion. Some bacteria (such as Legionella pneumophila) pose serious health risks.

### 6.4.2 Chemical Treatment Programs

A typical cooling water treatment program includes several categories of chemicals:

- **Corrosion inhibitors** — chemicals that form a protective film on metal surfaces to slow the electrochemical corrosion process. Common types include phosphonates, molybdate, zinc, and azoles (for copper and its alloys).
- **Scale inhibitors** — chemicals that interfere with crystal growth to prevent mineral deposits from forming on heat transfer surfaces. Common types include phosphonates, polymers, and phosphate esters. Scale inhibitors work by distorting the crystal structure of forming scale, keeping minerals in suspension.
- **Biocides** — chemicals that kill or control the growth of microorganisms. There are two types:
    - **Oxidizing biocides** (such as chlorine, bromine, and chlorine dioxide) — fast-acting, broad-spectrum killers that work by oxidizing cell membranes. Used as the primary biocide in most programs.
    - **Non-oxidizing biocides** (such as isothiazolone, glutaraldehyde, and DBNPA) — used as supplements to oxidizing biocides, especially for controlling specific organisms like Legionella or slime-forming bacteria.
- **Dispersants** — chemicals that keep suspended solids and biological debris in suspension so they can be removed by filtration or blowdown, rather than settling and forming deposits.
- **pH adjusters** — acids (typically sulfuric acid) or caustic to maintain the water pH within the target range (typically 7.0 to 9.0) for optimal effectiveness of the corrosion and scale inhibitors.

#### Diagram: Cooling Water Treatment Cycle

<iframe src="../../sims/cooling-water-treatment-cycle/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Water Treatment Cycle</summary>
Type: diagram

Bloom Taxonomy: Understand (L2)
Bloom Verb: describe, trace
Learning Objective: Students will be able to describe the purpose of each chemical treatment in a cooling water system and trace the treatment cycle from makeup water through the recirculating loop.

Purpose: Interactive flow diagram showing cooling water moving through the treatment cycle with chemical injection points and contaminant levels displayed at each stage.

Layout: Circular flow diagram showing the cooling water cycle with treatment injection points and water quality indicators.

Components shown (clockwise from cooling tower):
1. Cooling tower — warm water entering at top, cool water exiting at bottom into basin
2. Basin/sump — with blowdown valve and makeup water inlet
3. Makeup water treatment — softener or RO unit with quality indicators
4. Chemical injection point A — corrosion inhibitor and scale inhibitor dosing pumps
5. Circulating pump — pushing water through the system
6. Chemical injection point B — biocide dosing pump (before heat exchangers)
7. Strainer/filter — removing suspended solids before heat exchangers
8. Heat exchanger — process side and cooling water side with temperature indicators
9. Return line — warm water returning to cooling tower

Water quality indicators at key points:
- pH value shown at injection and return points
- Conductivity/TDS shown at makeup, basin, and blowdown
- Biocide residual shown after injection point B
- Temperature shown at heat exchanger inlet and outlet

Animated elements:
- Water particles flowing through the system in a continuous loop
- Chemical injection shown as colored pulses entering at injection points
- Evaporation shown as water vapor rising from cooling tower
- Blowdown shown as periodic discharge from basin
- Makeup water entering to replace losses

Interactive elements:
- Hover over any component for name, function, and typical specifications
- Click any water quality indicator for detailed parameter breakdown
- Slider: "Cycles of Concentration" (2-8) — shows how TDS increases and blowdown changes
- Toggle: "Show Chemical Injection" — highlights each chemical's path and function
- Toggle: "Show Contaminants" — shows how corrosion, scale, and biological contaminants develop without treatment

Color scheme: Light blue for cool clean water, orange for warm water, green for treated water, red for contaminants, purple for chemical injection
Responsive design: Must respond to window resize events. Components wrap on narrow screens.

Implementation: p5.js with animated water flow, chemical injection pulses, and dynamic water quality indicators
</details>

### 6.4.3 Cycles of Concentration and Blowdown

**Cycles of concentration (COC)** is the single most important number in cooling water chemistry management. As water evaporates in the tower, dissolved minerals stay behind and concentrate. If the makeup water has 200 ppm of dissolved solids and the circulating water has 800 ppm, the system is running at 4 cycles of concentration.

Higher COC means less water waste (less makeup and blowdown needed), but more concentrated minerals increase the risk of scale and corrosion. The treatment program must balance these factors.

| Cycles of Concentration | Makeup Water Savings | Scale Risk | Corrosion Risk | Chemical Cost |
|------------------------|---------------------|------------|----------------|--------------|
| 2 | Baseline | Low | Low | Higher (more blowdown dilutes chemicals) |
| 3–4 | 20–30% vs. COC 2 | Moderate | Moderate | Moderate |
| 5–6 | 35–45% vs. COC 2 | High | High | Lower (less dilution) but more inhibitor needed |
| 7+ | 50%+ vs. COC 2 | Very high | Very high | Requires aggressive treatment program |

\[ \text{Blowdown (GPM)} = \frac{\text{Evaporation (GPM)}}{\text{COC} - 1} \]

\[ \text{Makeup (GPM)} = \text{Evaporation} + \text{Blowdown} + \text{Drift} \]

Most facilities operate between 3 and 6 cycles of concentration as the best balance between water savings and treatment cost.

#### Worked Example: Cycles of Concentration and Blowdown

**Given:**

- Evaporation rate = 100 GPM
- Target COC = 5

**Find:** Blowdown GPM and total makeup GPM

**Solution:**

1. Calculate blowdown from the evaporation rate and COC:

\[ \text{Blowdown} = \frac{\text{Evaporation}}{\text{COC} - 1} = \frac{100}{5 - 1} = 25 \text{ GPM} \]

2. Calculate total makeup water (neglecting drift, which is typically less than 0.001% of circulation):

\[ \text{Makeup} = \text{Evaporation} + \text{Blowdown} = 100 + 25 = 125 \text{ GPM} \]

**Answer:** The required blowdown is **25 GPM** and the total makeup water is **125 GPM**.

> **Practical note:** Increasing COC from 3 to 5 reduces blowdown from 50 GPM to 25 GPM — cutting water waste in half. But higher COC increases mineral concentration, requiring better chemical treatment to prevent scaling. Every facility must find the balance point where water savings justify the additional treatment cost.

### 6.4.4 Biological Control and Legionella Prevention

Biological control deserves special emphasis because of the health risk posed by **Legionella pneumophila**, the bacterium that causes Legionnaires' disease — a severe and potentially fatal form of pneumonia. Cooling towers are a known source of Legionella because they provide warm water (ideal growth temperature: 77–113°F), nutrients from airborne organic matter, and aerosolized water droplets that can be inhaled.

Effective Legionella control in cooling towers requires:

- **Maintaining biocide residual** — keeping a measurable oxidizing biocide residual at all times
- **Minimizing stagnation** — ensuring all parts of the system have adequate flow (no dead legs)
- **Controlling biofilm** — biofilm provides a protected environment for Legionella growth; dispersants and non-oxidizing biocides help penetrate biofilm
- **Regular testing** — quarterly or monthly Legionella testing per ASHRAE Standard 188
- **Water management plan** — a documented plan that identifies hazards and control measures, required by ASHRAE 188 and many local health codes

!!! warning "Legionella Is a Serious Health and Legal Risk"
    Cooling tower outbreaks of Legionnaires' disease have caused multiple fatalities in the United States and worldwide. Facilities that operate cooling towers are legally required to maintain water management plans in many jurisdictions. A Legionella outbreak can result in facility shutdowns, lawsuits, and criminal charges. This is not a topic to take lightly — proper water treatment and monitoring are essential.

## 6.5 Corrosion Prevention

**Corrosion** is the electrochemical process by which metals deteriorate through reaction with their environment. In cooling water systems, corrosion attacks pipes, heat exchanger tubes, pump impellers, cooling tower structural steel, and virtually every metal surface that contacts the water. Left unchecked, corrosion causes equipment failures, leaks, contamination of process fluids, and costly emergency repairs.

### 6.5.1 Types of Corrosion in Cooling Water Systems

Several types of corrosion occur in cooling water systems, and each requires a different prevention approach:

- **General (uniform) corrosion** — a uniform thinning of the metal surface across a large area. The most common type, and relatively predictable. A steel pipe losing 2 mils (0.002 inches) of wall thickness per year from general corrosion can be planned for and managed.
- **Pitting corrosion** — localized attack that creates small, deep holes in the metal surface. Much more dangerous than general corrosion because it can penetrate a pipe wall or heat exchanger tube while the overall wall thickness appears adequate. Pitting is often caused by chloride ions, stagnant conditions, or deposits on the metal surface.
- **Galvanic corrosion** — occurs when two dissimilar metals are in electrical contact in the presence of an electrolyte (the cooling water). The more active (anodic) metal corrodes preferentially. Common examples include steel pipe connected to copper heat exchanger tubes, or aluminum components in contact with steel.
- **Erosion-corrosion** — the combined effect of chemical corrosion and mechanical erosion from high water velocity or entrained particles. Most common at pipe elbows, tees, and pump impellers where velocity changes direction.
- **Microbiologically influenced corrosion (MIC)** — corrosion caused or accelerated by microorganisms, particularly sulfate-reducing bacteria (SRB) that produce hydrogen sulfide under deposits. MIC can cause rapid pitting failure even in systems with otherwise good corrosion control.
- **Under-deposit corrosion** — corrosion that occurs beneath deposits of scale, biofilm, or sediment. The deposit creates an oxygen-depleted zone that becomes anodic relative to the surrounding metal, driving localized attack.

### 6.5.2 Corrosion Inhibitors

Corrosion inhibitors form a protective film on metal surfaces that slows or stops the electrochemical corrosion process. The choice of inhibitor depends on the metals in the system, water chemistry, and regulatory requirements.

| Inhibitor Type | Protects | Mechanism | Typical Dosage | Notes |
|---------------|----------|-----------|---------------|-------|
| Phosphonates | Steel, copper alloys | Cathodic film formation | 5–15 ppm (as PO₄) | Most common; also provides scale inhibition |
| Molybdate | Steel | Anodic passivation | 2–10 ppm (as Mo) | Excellent pitting protection; higher cost |
| Zinc | Steel | Cathodic film | 0.5–2 ppm (as Zn) | Often combined with phosphonates; environmental discharge limits |
| Azoles (tolyltriazole, BZT) | Copper, brass, bronze | Adsorption film on copper surfaces | 1–5 ppm | Essential when copper alloys are present |
| Silicate | Aluminum, steel | Barrier film | 10–20 ppm (as SiO₂) | Used in aluminum heat exchangers |

### 6.5.3 Material Selection for Corrosion Resistance

Choosing the right materials during system design is the most effective long-term corrosion prevention strategy:

- **Carbon steel** — inexpensive but requires chemical treatment; suitable for piping and structural components where some corrosion is tolerable
- **Copper alloys (admiralty brass, cupronickel)** — excellent heat transfer and moderate corrosion resistance; traditional choice for heat exchanger tubes
- **Stainless steel (304, 316)** — excellent corrosion resistance but susceptible to chloride pitting above 150 ppm chloride; 316 is better than 304 for chloride service
- **Titanium** — virtually immune to cooling water corrosion; used in aggressive water chemistry or seawater cooling; high cost
- **Fiberglass-reinforced plastic (FRP)** — immune to electrochemical corrosion; used for cooling tower structures and piping in corrosive environments
- **Concrete** — used for cooling tower basins and structures; requires protective coatings in acidic water

#### Diagram: Cooling Corrosion and Scale Simulator

<iframe src="../../sims/cooling-corrosion-scale-sim/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Corrosion and Scale Simulator</summary>
Type: microsim

Bloom Taxonomy: Apply (L3)
Bloom Verb: demonstrate, implement
Learning Objective: Students will be able to demonstrate how water chemistry parameters affect corrosion and scale formation rates, and implement treatment adjustments to bring both under control.

Purpose: Interactive simulation where students adjust water chemistry parameters and observe the resulting corrosion rate and scale formation on a heat exchanger tube cross-section.

Canvas layout:
- Top area: Heat exchanger tube cross-section showing metal wall, scale layer, and water flow
- Middle area: Water chemistry parameter controls (sliders)
- Bottom area: Corrosion rate meter, scale thickness meter, and Langelier Saturation Index (LSI) display

Visual elements:
- Animated heat exchanger tube cross-section (circular) showing:
  - Metal wall thickness (shrinks as corrosion progresses)
  - Scale layer (grows on the water side)
  - Pitting corrosion spots (appear under certain conditions)
  - Water flow with dissolved particles
- Corrosion rate gauge: 0–20 mpy (mils per year), green/yellow/red zones
- Scale formation rate gauge: 0–10 mm/year, green/yellow/red zones
- LSI calculator display: shows current value and interpretation (negative = corrosive, zero = balanced, positive = scale-forming)

Interactive controls:
- Slider: "pH" (6.0 to 9.5) — lower pH increases corrosion, higher pH increases scale
- Slider: "Calcium Hardness" (50 to 800 ppm as CaCO₃) — higher hardness increases scale risk
- Slider: "Alkalinity" (50 to 500 ppm as CaCO₃) — affects both buffering and scale formation
- Slider: "TDS" (200 to 3000 ppm) — higher TDS increases conductivity and corrosion
- Slider: "Temperature" (70°F to 130°F) — higher temperature accelerates both corrosion and scale
- Slider: "Corrosion Inhibitor Dosage" (0 to 20 ppm) — reduces corrosion rate
- Slider: "Scale Inhibitor Dosage" (0 to 20 ppm) — reduces scale formation rate
- Button: "Reset to Defaults" — returns all parameters to baseline
- Button: "Run 1 Year" — fast-forwards simulation to show cumulative effect over one year

Behavior:
- Adjusting pH toward acidic (below 7) increases corrosion and decreases scale
- Adjusting pH toward alkaline (above 8.5) increases scale and decreases corrosion
- The optimal zone is pH 7.5–8.5 with appropriate inhibitor dosages
- High calcium + high alkalinity + high temperature = rapid scale formation
- Low pH + high TDS + no inhibitor = rapid corrosion with pitting
- Students must find the balance that minimizes both corrosion and scale

Langelier Saturation Index calculation:
LSI = pH - pHs (where pHs is the saturation pH calculated from temperature, calcium, alkalinity, and TDS)
- LSI < -0.5: aggressive corrosion
- LSI -0.5 to +0.5: balanced (target zone)
- LSI > +0.5: scale-forming

Instructional Rationale: Parameter exploration with real-time visual feedback is appropriate because the Apply/demonstrate objective requires students to manipulate variables and observe cause-and-effect relationships, developing intuition for how water chemistry balances affect corrosion and scale in real cooling systems.

Responsive design: Must respond to window resize events. Canvas adjusts to container width.

Implementation: p5.js with animated tube cross-section, real-time LSI calculation, and interactive slider controls
</details>

## 6.6 Scale Prevention

**Scale** is the hard mineral deposit that forms on heat transfer surfaces when dissolved minerals in the cooling water exceed their solubility limits and precipitate out of solution. The most common scale in cooling water systems is **calcium carbonate (CaCO₃)**, followed by calcium sulfate, silica, and calcium phosphate. Scale acts as insulation on heat exchanger surfaces, dramatically reducing heat transfer efficiency and forcing equipment to work harder.

### 6.6.1 Causes of Scale Formation

Scale forms when the concentration of dissolved minerals exceeds the saturation point for the water's temperature and chemistry. Several factors promote scale formation:

- **High cycles of concentration** — as water evaporates in the cooling tower, minerals concentrate. At 5 COC, a mineral at 200 ppm in makeup water reaches 1,000 ppm in the circulating water.
- **High temperature** — calcium carbonate has **inverse solubility** — it becomes less soluble as temperature increases. This means scale forms preferentially on the hottest surfaces (the heat exchanger tubes), exactly where it causes the most damage.
- **High pH** — calcium carbonate solubility decreases as pH rises above 8.5
- **High calcium hardness** — more calcium ions in solution means more potential for calcium carbonate precipitation
- **High alkalinity** — more carbonate and bicarbonate ions available to combine with calcium

### 6.6.2 Impact of Scale on Heat Transfer

Even a thin layer of scale has a dramatic effect on heat transfer. Scale has a thermal conductivity approximately 100 times lower than steel, so a thin layer of scale is equivalent to adding a thick layer of insulation to the heat exchanger surface.

| Scale Thickness | Heat Transfer Loss | Energy Cost Increase |
|----------------|-------------------|---------------------|
| 1/32 inch (0.8 mm) | ~10% | ~10% |
| 1/16 inch (1.6 mm) | ~25% | ~25% |
| 1/8 inch (3.2 mm) | ~40% | ~40% |
| 1/4 inch (6.4 mm) | ~60% | ~60% |

A 1/16-inch layer of scale on the condenser tubes of a 500-ton chiller can increase the chiller's energy consumption by 25 percent — potentially costing $10,000 to $25,000 per year in additional electricity. Scale prevention is one of the highest-return investments in cooling water management.

### 6.6.3 Scale Prevention Methods

Effective scale prevention uses a combination of approaches:

- **Chemical scale inhibitors** — phosphonates, polymers, and phosphate esters that interfere with crystal formation. These chemicals work at very low dosages (5–15 ppm) and are the primary scale prevention tool.
- **Blowdown control** — maintaining the cycles of concentration at a level where mineral concentrations stay below saturation. Automated conductivity controllers measure the TDS and open the blowdown valve when the setpoint is exceeded.
- **pH control** — maintaining pH in the target range (typically 7.0–8.5) to prevent calcium carbonate precipitation. Sulfuric acid is commonly used to lower pH.
- **Softening makeup water** — removing calcium and magnesium from the makeup water before it enters the system. Water softeners or reverse osmosis units reduce the mineral load, allowing higher cycles of concentration.
- **Side-stream filtration** — filtering a portion of the circulating water to remove suspended solids and precipitated minerals before they can deposit on heat transfer surfaces.

### 6.6.4 The Langelier Saturation Index (LSI)

The **Langelier Saturation Index (LSI)** is the primary tool for predicting whether cooling water will be corrosive or scale-forming. The LSI compares the actual pH of the water to the theoretical pH at which calcium carbonate is in equilibrium (the saturation pH, or pHs).

\[ \text{LSI} = \text{pH} - \text{pH}_s \]

where pH is the measured water pH and pHs is calculated from water temperature, calcium hardness, total alkalinity, and total dissolved solids.

| LSI Value | Interpretation | Recommended Action |
|-----------|---------------|-------------------|
| Below -2.0 | Severely corrosive | Increase pH, add calcium, add corrosion inhibitor |
| -2.0 to -0.5 | Moderately corrosive | Add corrosion inhibitor, consider pH adjustment |
| -0.5 to +0.5 | Balanced (target zone) | Maintain current treatment program |
| +0.5 to +2.0 | Moderately scale-forming | Add scale inhibitor, increase blowdown, consider acid feed |
| Above +2.0 | Severely scale-forming | Reduce COC, add acid, add scale inhibitor |

#### Worked Example: Langelier Saturation Index

**Given:**

- Measured pH = 8.2
- Calculated saturation pH (pHs) = 7.8

**Find:** LSI value and water tendency

**Solution:**

1. Calculate the LSI:

\[ \text{LSI} = \text{pH} - \text{pH}_s = 8.2 - 7.8 = +0.4 \]

2. Interpret the result using the LSI table:

    - LSI > 0: Scale-forming tendency
    - LSI = 0: Balanced
    - LSI < 0: Corrosive tendency

**Answer:** The LSI is **+0.4**, indicating a **mildly scale-forming** water condition.

> **Practical note:** At +0.4, the water is at the upper edge of the balanced zone and trending toward scale formation. Treatment options include increasing blowdown to reduce mineral concentration, adding a scale inhibitor, or lowering pH with acid feed. The best response depends on the specific system — in a system with copper alloy heat exchangers, a slightly positive LSI is often preferred because it forms a thin protective calcium carbonate film that reduces copper corrosion.

!!! tip "LSI Is Your Compass"
    Think of the LSI as a compass that tells you which direction your water chemistry is heading. Negative LSI means the water wants to dissolve metal (corrosion). Positive LSI means the water wants to deposit minerals (scale). The treatment program's job is to keep the LSI near zero — balanced — so the water does neither. Checking the LSI should be part of every routine water quality test.

## 6.7 Water Quality Monitoring and Parameters

Effective cooling water management requires regular monitoring of key water quality parameters. These parameters tell you whether the treatment program is working, whether equipment is at risk, and whether adjustments are needed. Without monitoring, you are operating blind — problems develop silently until equipment fails or water quality deteriorates to the point of visible damage.

### 6.7.1 Key Water Quality Parameters

| Parameter | What It Measures | Target Range (typical) | Why It Matters |
|-----------|-----------------|----------------------|----------------|
| pH | Hydrogen ion concentration (acidity/alkalinity) | 7.0–8.5 | Controls corrosion/scale balance; affects inhibitor effectiveness |
| Conductivity | Total ionic content (proxy for TDS) | 1,000–3,000 µS/cm | Controls cycles of concentration; triggers blowdown |
| Total Dissolved Solids (TDS) | Total dissolved mineral content | 500–2,000 ppm | Indicates concentration level; corrosion risk above limits |
| Calcium hardness | Dissolved calcium (as CaCO₃) | 200–800 ppm | Scale-forming potential; used in LSI calculation |
| Total alkalinity | Bicarbonate and carbonate content (as CaCO₃) | 100–500 ppm | Buffering capacity; scale potential; used in LSI calculation |
| Chloride | Dissolved chloride ions | < 250 ppm | Pitting corrosion risk, especially for stainless steel |
| Silica | Dissolved silica (as SiO₂) | < 150 ppm | Silica scale (very hard to remove once formed) |
| Iron | Dissolved and suspended iron | < 3 ppm | Indicates active corrosion in the system |
| Copper | Dissolved copper | < 0.5 ppm | Indicates corrosion of copper alloy components |
| Oxidizing biocide residual | Free chlorine or bromine | 0.2–1.0 ppm (as Cl₂) | Biological control effectiveness |
| Bacteria count (TPC) | Total planktonic bacteria | < 10,000 CFU/mL | Biological fouling risk |

### 6.7.2 Monitoring Methods

Water quality can be monitored manually (grab samples tested in a lab or with field test kits) or continuously (IoT sensors feeding data to a monitoring platform).

**Manual testing** involves collecting water samples at regular intervals (daily, weekly, or monthly depending on the parameter) and analyzing them using:

- **Colorimetric test kits** — reagents that produce a color change proportional to the parameter concentration, compared to a color chart or measured with a photometer
- **Titration** — adding a reagent drop by drop until a color change indicates the endpoint (used for hardness and alkalinity)
- **Portable meters** — handheld electronic instruments for pH, conductivity, ORP, and temperature

**Continuous monitoring** uses permanently installed sensors connected to a controller or IoT platform:

- **pH sensors** — glass electrode or ISFET sensors that measure hydrogen ion activity continuously
- **Conductivity sensors** — measure the water's ability to conduct electricity, which is proportional to TDS
- **ORP (oxidation-reduction potential) sensors** — measure the biocide oxidizing strength of the water
- **Turbidity sensors** — measure suspended solids that indicate biological growth or precipitation
- **Corrosion rate monitors** — electrochemical probes (linear polarization resistance, or LPR) that measure the actual corrosion rate on a test coupon in real time
- **Flow sensors** — monitor makeup water, blowdown, and circulation flow rates

#### Diagram: Cooling Water Quality Monitor

<iframe src="../../sims/cooling-water-quality-monitor/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Water Quality Monitor</summary>
Type: microsim

Bloom Taxonomy: Analyze (L4)
Bloom Verb: interpret, diagnose
Learning Objective: Students will be able to interpret cooling water quality data from a monitoring dashboard and diagnose common water chemistry problems based on parameter trends and sensor patterns.

Purpose: Simulated cooling water monitoring dashboard where students observe real-time sensor data, identify normal and abnormal conditions, and practice diagnosing water chemistry problems from parameter trends.

Canvas layout:
- Top bar: System name ("Cooling Tower CT-200"), date/time, overall system status indicator
- Left panel: System schematic showing cooling tower, pumps, heat exchangers, and chemical injection with real-time parameter values at key points
- Right panel: Water quality parameter cards (pH, conductivity, calcium, alkalinity, biocide, corrosion rate, LSI)
- Bottom panel: Trend chart showing selected parameter over last 14 simulated days

System schematic (left panel):
- Cooling tower with basin temperature and water level
- Circulating pump with flow rate
- Heat exchanger with inlet/outlet temperatures and approach temperature
- Chemical injection points with dosing rate indicators
- Makeup water inlet with flow meter
- Blowdown valve with flow meter
- Color-coded water quality: blue (good), yellow (marginal), red (out of specification)

Water quality cards (right panel):
- pH: current value with normal range indicator (7.0-8.5 green zone)
- Conductivity: current value in µS/cm with target indicator
- Calcium hardness: current value in ppm
- Alkalinity: current value in ppm
- Biocide residual: current value in ppm with minimum threshold
- Corrosion rate: current value in mpy with normal/high indicator
- LSI: calculated value with corrosive/balanced/scaling indicator

Trend chart (bottom):
- Selectable parameter from dropdown
- 14-day time axis with current time marker
- Target range shown as green band
- Warning thresholds shown as yellow dashed lines
- Alarm thresholds shown as red dashed lines
- AI prediction shown as dotted extension of the trend line

Interactive controls:
- Scenario selector: "Normal Operation," "Rising Conductivity (COC drift)," "Scale Forming (high LSI)," "Corrosion Event (low pH)," "Biological Upset (low biocide)"
- Each scenario changes dashboard values and trend patterns to reflect that condition
- Click any parameter card for detailed data popup
- Dropdown to select trend chart parameter
- Button: "Show AI Diagnosis" — displays AI interpretation of the current scenario with recommended corrective actions

Scenario behaviors:
- Normal Operation: All values within target ranges, stable trends, LSI near zero
- Rising Conductivity: Conductivity trending up, blowdown valve may be stuck, COC increasing beyond target
- Scale Forming: LSI trending positive, calcium and alkalinity rising, heat exchanger approach temperature increasing (fouling)
- Corrosion Event: pH dropping below 7.0, corrosion rate increasing, iron levels rising, LSI trending negative
- Biological Upset: Biocide residual dropping to zero, bacteria count rising, biofilm forming (shown as turbidity increase)

Instructional Rationale: Multi-parameter dashboard with fault scenarios is appropriate because the Analyze/diagnose objective requires students to correlate multiple simultaneous parameter trends to identify the root cause of a water chemistry problem, mirroring real-world diagnostic reasoning in cooling water management.

Responsive design: Must respond to window resize events. Panels stack vertically on narrow screens.

Implementation: p5.js with simulated real-time data updates, trend charts, and scenario switching
</details>

## 6.8 AI-Driven Smart Monitoring and Predictive Maintenance

Traditional cooling water management relies on periodic manual testing — a technician collects water samples once or twice a week, runs tests, and adjusts chemical feed rates based on the results. This approach has two fundamental limitations: it only captures a snapshot of water chemistry at the moment of testing, and it reacts to problems after they develop rather than predicting them before they cause damage.

**AI-driven smart monitoring** transforms cooling water management from a reactive, periodic process into a continuous, predictive system. IoT sensors measure key parameters every few minutes, and machine learning algorithms analyze the data to detect developing problems, predict equipment failures, and optimize treatment programs in real time.

### 6.8.1 IoT Sensor Network for Cooling Water

A modern smart monitoring system for a cooling water system typically includes these continuously monitored parameters:

| Sensor | Location | Measurement | Update Frequency |
|--------|----------|-------------|-----------------|
| pH probe | Basin return | Water acidity/alkalinity | Every 60 seconds |
| Conductivity probe | Basin and makeup | TDS / cycles of concentration | Every 60 seconds |
| ORP probe | After biocide injection | Biocide effectiveness | Every 60 seconds |
| Temperature sensors | Supply, return, ambient | Water and air temperatures | Every 30 seconds |
| Flow meters | Makeup, blowdown, circulation | Water flow rates | Every 30 seconds |
| Corrosion probe (LPR) | Circulation line | Real-time corrosion rate | Every 5 minutes |
| Turbidity sensor | Basin | Suspended solids / biological growth | Every 5 minutes |
| Vibration sensor | Pump bearings | Mechanical condition | Every 60 seconds |
| Motor current sensor | Pump motor | Power consumption, load changes | Every 30 seconds |

### 6.8.2 How AI Predicts Cooling Water Problems

The AI system analyzes the continuous sensor data through several methods:

1. **Baseline learning** — when the system is freshly treated and operating normally, the AI establishes baseline values and normal variation ranges for all parameters
2. **Trend analysis** — the AI tracks how each parameter changes over time. A gradual increase in conductivity over several days indicates that the blowdown controller may be drifting, even though the current reading is still within range.
3. **Cross-parameter correlation** — the AI looks for relationships between parameters that indicate specific problems. For example, simultaneous increases in corrosion rate and iron concentration, combined with decreasing pH, strongly indicate an acid corrosion event.
4. **Pattern matching** — the AI compares current patterns to historical patterns that preceded past equipment problems. A specific combination of rising approach temperature, stable water chemistry, and declining heat exchanger performance typically indicates biological fouling inside the exchanger.
5. **Predictive modeling** — based on trend rates, the AI estimates when each parameter will reach a critical threshold and generates alerts with recommended actions before the problem becomes severe.

### 6.8.3 AI Applications in Cooling Water Management

| Application | How AI Helps | Benefit |
|-------------|-------------|---------|
| Chemical dosing optimization | AI adjusts chemical feed rates based on real-time water chemistry, weather, and system load | 10–20% reduction in chemical costs; more consistent treatment |
| Blowdown optimization | AI calculates optimal COC based on current makeup water quality and scale/corrosion risk | 15–30% reduction in makeup water consumption |
| Fouling detection | AI detects increasing approach temperature at heat exchangers before efficiency loss becomes significant | Earlier cleaning; prevents energy waste |
| Pump failure prediction | AI analyzes vibration, current, and pressure trends to predict bearing or seal failure | 70–85% reduction in unplanned pump downtime |
| Legionella risk assessment | AI monitors temperature, biocide residual, and stagnation indicators to flag elevated risk | Enhanced safety; regulatory compliance |
| Energy optimization | AI adjusts cooling tower fan speed and pump flow based on actual heat load and weather conditions | 15–25% reduction in cooling system energy consumption |

### 6.8.4 Benefits of AI-Driven Cooling Water Management

| Metric | Traditional Management | AI-Driven Management | Improvement |
|--------|----------------------|---------------------|-------------|
| Water chemistry testing | 1-2 tests per week (manual grab samples) | Continuous (every 1-5 minutes) | 500-1000x more data points |
| Time to detect chemistry upset | Days to a week | Minutes to hours | 90%+ faster response |
| Chemical consumption | Conservative dosing (safety margin) | Optimized real-time dosing | 10-20% reduction |
| Makeup water consumption | Fixed blowdown rate | Dynamic COC optimization | 15-30% reduction |
| Unplanned equipment downtime | 6-12 events/year | 1-3 events/year | 70-85% reduction |
| Heat exchanger cleaning frequency | Fixed schedule | Condition-based (when approach temp rises) | 20-40% fewer cleanings |
| Energy consumption | Fixed fan/pump speeds | Variable speed based on load | 15-25% reduction |

## 6.9 Energy Efficiency and Sustainability

Cooling water systems are significant energy and water consumers. The pumps, fans, and chemical treatment systems required to operate a cooling water system can account for 10 to 20 percent of a facility's total energy consumption. Additionally, cooling towers consume large volumes of water through evaporation — a 1,000-ton cooling system can evaporate over 30,000 gallons of water per day. This makes cooling water systems a high-priority target for energy and water conservation.

### 6.9.1 Sources of Energy Waste

The most common sources of energy waste in cooling water systems include:

- **Oversized pumps running at full speed** — circulating pumps sized for maximum design load waste energy during normal operation when the actual load is 50-70% of design. Without VFDs, these pumps run at full speed regardless of demand.
- **Cooling tower fans running at full speed** — tower fans sized for the worst-case summer afternoon run continuously even when the ambient wet-bulb temperature is low and less airflow is needed.
- **Scale on heat exchangers** — as discussed in Section 6.6, even 1/16 inch of scale increases energy consumption by 25%. Fouled exchangers force the chiller or process to work harder.
- **High approach temperature** — an unnecessarily high cooling tower approach temperature means the supply water is warmer than it needs to be, reducing heat exchanger performance and forcing process equipment to compensate.
- **Excessive blowdown** — draining more water than necessary wastes the energy used to heat that water in the process and the energy embedded in the chemical treatment. It also wastes the water itself.

### 6.9.2 Energy Optimization Strategies

- **VFD control on circulating pumps** — installing variable frequency drives on the circulating pumps and modulating speed based on actual cooling demand. At half speed, a pump consumes approximately one-eighth the energy (cubic relationship between speed and power). This is typically the single highest-return energy investment in a cooling water system.
- **VFD control on cooling tower fans** — modulating fan speed based on return water temperature and ambient conditions. On cool days or at night, the fan can run at reduced speed or even shut off entirely (free cooling).
- **Free cooling** — when the ambient wet-bulb temperature is low enough (typically below 55°F), the cooling tower alone can provide sufficiently cold water without running the chiller. A heat exchanger (waterside economizer) transfers heat from the chilled water loop to the condenser water loop, bypassing the chiller compressor entirely.
- **Approach temperature optimization** — reducing the cooling tower approach temperature by maintaining clean fill, proper water distribution, and optimized fan operation delivers colder water, improving downstream efficiency.
- **Scale and fouling prevention** — maintaining clean heat transfer surfaces through proper water treatment. As shown in Section 6.6, even thin scale layers have a dramatic impact on energy consumption.
- **Blowdown optimization** — using conductivity-controlled automatic blowdown instead of continuous blowdown. The AI-driven approach described in Section 6.8 takes this further by dynamically adjusting COC based on real-time conditions.

### 6.9.3 Water Conservation

Water is an increasingly scarce and expensive resource. Cooling water systems offer several opportunities for water conservation:

- **Maximize cycles of concentration** — increasing COC from 3 to 6 reduces makeup water consumption by approximately 30%. This requires excellent water treatment and monitoring but is one of the most effective water conservation measures.
- **Recover blowdown water** — blowdown water can be used for irrigation, cooling tower basin cleaning, or other non-potable purposes instead of being discharged to the sewer.
- **Use reclaimed water for makeup** — treated wastewater (reclaimed or recycled water) can be used as cooling tower makeup water. This requires additional treatment and monitoring but eliminates the use of potable water.
- **Minimize drift** — modern drift eliminators reduce drift losses to less than 0.001% of the circulation rate. Replacing old drift eliminators can save significant water in large systems.
- **Alternative cooling technologies** — dry coolers and adiabatic cooling systems use significantly less water than conventional cooling towers, though they are less energy-efficient in hot climates.

#### Diagram: Cooling Maintenance Checklist

<iframe src="../../sims/cooling-maintenance-checklist/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Maintenance Checklist</summary>
Type: infographic

Bloom Taxonomy: Apply (L3)
Bloom Verb: perform, execute
Learning Objective: Students will be able to perform a systematic cooling water system maintenance inspection by following a structured checklist for cooling towers, pumps, heat exchangers, water treatment, and piping.

Purpose: Interactive visual checklist organized by component area that technicians can reference during cooling water system maintenance procedures.

Layout: Five-section infographic with a central cooling water system illustration. Each section covers one maintenance area.

Section 1 — Cooling Tower:
- Icon: cooling tower cross-section
- Checklist items:
  - Inspect fill media for scale, biological growth, or damage
  - Check water distribution nozzles or basins for even flow
  - Inspect drift eliminators for damage or clogging
  - Clean debris screens and basin strainers
  - Check fan blade condition and hub tightness
  - Verify fan motor current and vibration levels
  - Inspect structural members for corrosion
  - Verify basin water level and float valve operation

Section 2 — Circulating Pumps:
- Icon: centrifugal pump cross-section
- Checklist items:
  - Check pump bearing temperature and vibration
  - Record motor amperage and compare to nameplate
  - Inspect mechanical seal for leaks
  - Verify suction and discharge pressure readings
  - Check alignment between pump and motor
  - Inspect coupling condition
  - Verify VFD operation (if equipped)

Section 3 — Heat Exchangers:
- Icon: shell-and-tube heat exchanger
- Checklist items:
  - Record approach temperature and compare to baseline
  - Check for pressure drop increase across tube side
  - Inspect tube sheet for leaks (dye test if needed)
  - Schedule cleaning when approach temp exceeds threshold
  - Verify isolation valve operation
  - Inspect sacrificial anodes (if installed)

Section 4 — Water Treatment:
- Icon: chemical dosing pump
- Checklist items:
  - Test pH, conductivity, calcium, alkalinity, and biocide residual
  - Calculate LSI and verify it is within -0.5 to +0.5
  - Check chemical feed pump operation and calibration
  - Verify chemical tank levels and order replacements as needed
  - Inspect blowdown valve operation
  - Review corrosion coupon data (monthly)
  - Conduct Legionella testing per schedule

Section 5 — Piping and Valves:
- Icon: pipe section with valve
- Checklist items:
  - Walk the system looking for leaks, corrosion, or insulation damage
  - Check pipe supports and hangers for sagging or damage
  - Verify isolation valves operate freely (exercise annually)
  - Inspect strainer screens and clean as needed
  - Drain and inspect dead legs (quarterly)
  - Check expansion joints and flexible connectors

Interactive elements:
- Click each checklist item to mark it complete (checkbox animation with green checkmark)
- Hover over each icon to see a description of that maintenance area
- Progress bar at the top showing percentage of checklist completed
- "Reset Checklist" button to clear all checks
- "Print Checklist" button to generate a printable version

Color scheme: Green for completed items, gray for unchecked items, red highlight for safety-critical items
Responsive design: Must respond to window resize events. Sections stack vertically on narrow screens.

Implementation: HTML/CSS/JavaScript with interactive checkboxes and SVG icons
</details>

### 6.9.4 Sustainability Metrics

To manage cooling water sustainability effectively, track these key metrics:

- **Water use intensity** — gallons of cooling water makeup per unit of production or per ton of cooling. This normalizes water consumption to production output, making meaningful year-over-year comparisons possible.
- **Cycles of concentration** — higher COC means less water waste per unit of cooling. Track actual COC versus target.
- **Cooling system energy intensity** — kWh per ton of cooling delivered. This includes the energy consumed by pumps, fans, and chillers. Lower values indicate a more efficient system.
- **Chemical discharge compliance** — verify that blowdown water meets local discharge limits for pH, TDS, phosphorus, zinc, and other treatment chemicals.

\[ \text{Water Use Intensity} = \frac{\text{Makeup Water (gallons)}}{\text{Production Output (units or ton-hours)}} \]

\[ \text{Energy Intensity} = \frac{\text{Total Cooling System Energy (kWh)}}{\text{Total Cooling Delivered (ton-hours)}} \]

#### Worked Example: Water and Energy Use Intensity

**Given:**

- Annual makeup water = 2,000,000 gallons
- Annual energy consumption for cooling system = 500,000 kWh
- Total cooling delivered = 50,000 ton-hours

**Find:** Water Use Intensity (WUI) and Energy Use Intensity (EUI)

**Solution:**

1. Calculate WUI:

\[ \text{WUI} = \frac{2{,}000{,}000 \text{ gal}}{50{,}000 \text{ ton-hr}} = 40 \text{ gal/ton-hr} \]

2. Calculate EUI:

\[ \text{EUI} = \frac{500{,}000 \text{ kWh}}{50{,}000 \text{ ton-hr}} = 10 \text{ kWh/ton-hr} \]

**Answer:** The Water Use Intensity is **40 gal/ton-hr** and the Energy Use Intensity is **10 kWh/ton-hr**.

> **Practical note:** Industry benchmarks for water-cooled systems: WUI of 25-35 gal/ton-hr is good; above 45 suggests excessive blowdown or drift. EUI below 0.8 kWh/ton-hr is excellent for the chiller alone; the 10 kWh/ton-hr here includes pumps, fans, and auxiliary loads across the full cooling plant. Tracking these intensities month-over-month normalizes for seasonal variation and production changes, making it possible to detect efficiency degradation independent of load fluctuations.

#### Diagram: Cooling Energy Comparison

<iframe src="../../sims/cooling-energy-comparison/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Cooling Energy Comparison</summary>
Type: infographic

Bloom Taxonomy: Evaluate (L5)
Bloom Verb: assess, justify
Learning Objective: Students will be able to assess the energy and water consumption of different cooling strategies and justify recommendations for efficient and sustainable cooling water system design.

Purpose: Interactive comparison showing energy and water consumption across different cooling strategies, with cost and environmental impact calculations.

Layout: Two-panel display with a cooling strategy comparison on the left and an optimization impact comparison on the right, with a combined summary chart at the bottom.

Left panel — Cooling Strategy Comparison:
- Four strategies displayed as cards: Once-Through, Open Recirculating (standard), Open Recirculating (optimized with VFDs), Dry/Hybrid Cooling
- Each card shows:
  - Annual energy consumption (kWh) for a 500-ton cooling system
  - Annual water consumption (gallons)
  - Annual energy cost at default electricity rate
  - Annual water cost at default water rate
  - Annual CO2 emissions (using EPA grid average)
  - Suitability rating by climate (hot/temperate/cold)

Right panel — Optimization Impact Comparison:
- Four optimizations displayed as columns:
  1. "Baseline (no optimization)" — standard fixed-speed operation
  2. "VFD on Pumps" — variable speed circulating pumps
  3. "VFD on Fans + Free Cooling" — variable speed fans with waterside economizer
  4. "Full Optimization (VFDs + AI + Water Treatment)" — comprehensive AI-driven optimization
- Each column shows:
  - Annual energy consumption (kWh)
  - Annual water consumption (gallons)
  - Annual total cost (energy + water + chemicals)
  - Percentage savings vs. baseline
  - Simple payback period for the upgrade investment

Bottom panel — Combined Summary Chart:
- Grouped bar chart: energy cost and water cost by strategy and optimization level
- Stacked bars showing the breakdown: pump energy, fan energy, chiller energy, water cost, chemical cost
- Line overlay: total annual operating cost
- Highlighted "best combination" indicator for each climate zone

Interactive controls:
- Slider: "Cooling Load" (25%, 50%, 75%, 100% of design capacity) — shows how efficiency changes at partial load
- Slider: "Electricity Rate" ($0.08 to $0.25 per kWh) — recalculates all energy costs
- Slider: "Water Rate" ($2 to $15 per 1,000 gallons) — recalculates all water costs
- Slider: "Average Wet-Bulb Temperature" (50°F to 80°F) — shows climate impact on tower performance and free cooling hours
- Toggle: "Show CO2 Impact" — adds emissions data to all displays
- Dropdown: "System Size" (100 tons, 500 tons, 1,000 tons, 5,000 tons) — scales all values

Behavior:
- At partial loads, VFD control shows dramatic energy savings due to cubic power law
- In cold climates (low wet-bulb), free cooling provides thousands of hours of chiller-free operation
- Full optimization combines VFDs, AI-driven control, and water treatment for maximum savings
- Water-scarce regions benefit most from dry/hybrid cooling despite higher energy costs
- Higher electricity and water rates amplify the payback advantage of optimized systems

Instructional Rationale: Multi-variable comparison with adjustable parameters is appropriate because the Evaluate/justify objective requires students to weigh multiple factors (energy, water, cost, climate, environmental impact) and defend a specific recommendation based on quantified data for a given facility's conditions.

Responsive design: Must respond to window resize events. Panels stack vertically on narrow screens.

Implementation: HTML/CSS/JavaScript with Chart.js for bar/line charts and interactive parameter controls
</details>

## 6.10 Utility Rebates, Incentives, and Building the Business Case

Many of the energy efficiency and water conservation upgrades discussed in this chapter qualify for **utility rebate programs** and **government incentives** that can dramatically reduce upfront costs and shorten payback periods. Cooling water systems are prime targets for incentive programs because they consume significant electricity (pumps and fans) and water, and proven efficiency technologies like VFDs and free cooling deliver measurable, verifiable savings.

### Available Incentive Programs

| Program Type | Examples | Typical Benefit |
|-------------|----------|----------------|
| Utility prescriptive rebates | VFD on cooling tower fan, VFD on circulating pump, premium-efficiency motors | $50–$150 per HP for VFDs; $10–$25 per HP for premium motors |
| Utility custom/calculated rebates | Free cooling (waterside economizer), condenser water reset, automated water treatment | $0.03–$0.12 per kWh saved annually |
| Federal tax credits (IRA §179D) | Energy-efficient commercial building deduction for qualifying HVAC/cooling upgrades | Up to $5.00/sq ft for whole-building projects |
| State/local programs | Water conservation rebates, industrial process efficiency grants | Varies by state — $500 to $50,000+ per project |
| DOE programs | Better Plants, 50001 Ready, CHP Technical Assistance | Technical assistance, recognition, no-cost energy assessments |

### How to Find Available Rebates

1. **Check your utility's website** — Search for "[utility name] commercial rebates" or "business energy incentives." Most large utilities offer both prescriptive rebates (fixed dollar amounts per qualifying unit) and custom/calculated rebates (based on verified energy savings). Cooling tower VFD rebates and pump VFD rebates are among the most commonly available prescriptive programs.
2. **Use the DSIRE database** — The Database of State Incentives for Renewables and Efficiency ([dsireusa.org](https://www.dsireusa.org)) catalogs federal, state, and local incentive programs. Search by state and technology type (e.g., "variable speed drives," "HVAC efficiency," "water conservation") to find applicable programs.
3. **Contact your utility account representative** — Large commercial and industrial customers often have dedicated account managers who can identify applicable programs, walk you through the application process, and help coordinate pre-installation inspections.
4. **Get pre-approval before starting work** — Many rebate programs require pre-approval and baseline energy or water usage documentation before equipment is purchased or installed. Starting a project without pre-approval can disqualify you from receiving the rebate.

### Common Cooling Water System Upgrades and Rebate Potential

| Upgrade | Typical Cost | Annual Savings | Typical Rebate | Net Payback |
|---------|-------------|----------------|----------------|-------------|
| VFD on cooling tower fans (50 HP) | $8,000–$12,000 | $4,500–$7,000/yr | $3,000–$6,000 | 0.8–1.8 years |
| Water-side economizer (free cooling) | $25,000–$60,000 | $8,000–$20,000/yr | $5,000–$15,000 | 1.5–3.5 years |
| Premium-efficiency cooling tower motors | $2,500–$5,000 | $600–$1,200/yr | $500–$1,200 | 1.5–3.5 years |
| Automated water treatment controls | $15,000–$30,000 | $5,000–$12,000/yr (water + chemicals) | $3,000–$8,000 | 1.5–3.0 years |
| Condenser water reset controls | $5,000–$10,000 | $3,000–$6,000/yr | $2,000–$4,000 | 0.5–1.5 years |

### Building the Business Case

When presenting a cooling water efficiency project to management, focus on **total lifecycle cost** rather than just the initial purchase price. A VFD on a 50 HP cooling tower fan may cost $10,000 to install, but it saves $5,000–$7,000 per year in electricity, and a utility rebate of $4,000–$6,000 can reduce the net out-of-pocket cost to as little as $4,000. That translates to a simple payback of less than one year — far exceeding the typical corporate hurdle rate of 2–3 years. The VFD will then continue saving $5,000+ per year for its 15–20 year service life, delivering a total return many times the initial investment.

Frame efficiency upgrades in terms that resonate with financial decision-makers. Calculate and present the **internal rate of return (IRR)** and **net present value (NPV)**, not just simple payback. Include the value of rebates and tax credits as reductions to the initial investment. Quantify avoided risks — for example, the cost of an unplanned chiller shutdown due to fouled condensers versus the cost of automated water treatment controls that prevent fouling. Mention that energy prices have historically risen 2–4% per year, which means savings grow over time while the equipment cost is fixed.

Finally, include environmental and regulatory benefits. Many organizations have corporate sustainability goals, greenhouse gas reduction targets, or ESG (Environmental, Social, and Governance) reporting requirements. A cooling water optimization project that reduces electricity consumption by 20% and water consumption by 30% delivers measurable progress toward these goals. Documenting the avoided CO₂ emissions (using EPA eGRID emission factors) and water savings strengthens the business case and may qualify the project for additional internal funding from sustainability budgets.

## 6.11 Lab Preview: Inspect a Cooling System and Analyze Water Data

In this week's hands-on lab, you will apply the concepts from this chapter by inspecting a cooling water system, testing water quality, calculating key indices, and interpreting AI-generated monitoring data.

### Lab Activities

1. **Identify cooling water system components** — walk through the lab cooling water system and identify the cooling tower, circulating pumps, heat exchangers, chemical injection points, blowdown valve, and makeup water connection. Label each component on a provided system diagram.
2. **Inspect the cooling tower** — examine the tower fill, drift eliminators, water distribution system, fan, and basin. Document the condition of each component and note any visible biological growth, scale deposits, or structural damage.
3. **Test water quality** — collect water samples from the basin, makeup water line, and blowdown. Using field test kits and portable meters, measure pH, conductivity, calcium hardness, total alkalinity, chloride, and biocide residual. Record all results.
4. **Calculate the Langelier Saturation Index** — using your water quality measurements and the water temperature, calculate the LSI. Determine whether the water is corrosive, balanced, or scale-forming, and recommend any treatment adjustments.
5. **Calculate cycles of concentration** — compare the conductivity (or TDS) of the circulating water to the makeup water. Calculate the actual COC and compare it to the facility's target. If the COC is off-target, explain what might be causing it and what adjustments are needed.
6. **Measure heat exchanger performance** — record the cooling water inlet temperature, outlet temperature, and process-side temperatures at a heat exchanger. Calculate the approach temperature and compare it to the design specification. If the approach is higher than expected, explain what could be causing the degradation.
7. **Review AI monitoring data** — access the AI-based cooling water monitoring software provided. Review the current parameter values, trend charts, and any alerts or recommendations generated by the AI. Evaluate whether the AI's diagnosis matches your field observations and water quality test results.
8. **Document your findings** — record all measurements, observations, calculations, and AI diagnostic interpretations in your lab report. Include your LSI calculation, COC calculation, and recommendations for improving the system's water treatment, energy efficiency, or maintenance program.

### Lab Safety Reminders

- **Wear safety glasses, gloves, and appropriate clothing** at all times when working near cooling towers and chemical treatment equipment
- **Handle water treatment chemicals carefully** — many cooling water chemicals are corrosive, toxic, or irritating. Read the Safety Data Sheet (SDS) before handling any chemical. Wear chemical-resistant gloves and eye protection.
- **Be aware of biological hazards** — cooling tower water may contain Legionella and other pathogens. Avoid breathing mist or spray from the cooling tower. Wash hands thoroughly after handling cooling water samples.
- **Watch for slip hazards** — cooling tower decks and basin areas are often wet and slippery. Wear slip-resistant footwear and use caution.
- **Follow lockout/tagout procedures** before performing any maintenance on pumps, fans, or electrical equipment
- **Never climb on cooling tower structures** without proper fall protection and authorization
- **Report any chemical spills** immediately and follow facility spill response procedures

## Key Takeaways

- **Cooling water systems** remove waste heat from industrial processes and equipment by circulating water through heat exchangers and rejecting heat to the atmosphere through cooling towers. They are essential in power generation, chemical processing, data centers, HVAC, and manufacturing.
- **Three system types** — once-through, open recirculating, and closed recirculating — serve different applications. Open recirculating systems with cooling towers are the most common in industrial facilities.
- **Cooling tower types** include natural draft (no fans, used at large power plants), and mechanical draft with forced or induced airflow in crossflow or counterflow configurations. Induced draft counterflow towers offer the best thermal efficiency for most industrial applications.
- **Water treatment** addresses the "big three" problems — corrosion, scale, and biological fouling — through chemical inhibitors, biocides, pH control, dispersants, and blowdown management. Proper treatment prevents equipment damage and maintains heat transfer efficiency.
- **Cycles of concentration (COC)** is the key control parameter. Higher COC saves water and chemicals but increases scale and corrosion risk. Most facilities operate between 3 and 6 COC as the optimal balance.
- **Corrosion prevention** requires understanding the types of corrosion (general, pitting, galvanic, erosion, MIC, under-deposit), applying appropriate chemical inhibitors, and selecting corrosion-resistant materials during system design.
- **Scale prevention** is critical because even thin scale deposits dramatically reduce heat transfer efficiency — a 1/16-inch layer of scale increases energy consumption by approximately 25%. The Langelier Saturation Index (LSI) is the primary tool for predicting scale or corrosion tendency.
- **Water quality monitoring** of pH, conductivity, calcium, alkalinity, chloride, biocide residual, and corrosion rate provides the data needed to manage the treatment program and detect developing problems.
- **Legionella prevention** in cooling towers is a serious health and legal requirement. Maintaining biocide residual, controlling biofilm, and implementing ASHRAE 188 water management plans are essential.
- **AI-driven smart monitoring** uses IoT sensors and machine learning to transform cooling water management from periodic manual testing to continuous, predictive optimization — detecting problems in minutes instead of days and reducing chemical, water, and energy consumption by 10 to 30 percent.
- **Energy efficiency** depends on VFD control of pumps and fans, free cooling when ambient conditions allow, maintaining clean heat transfer surfaces, and optimizing approach temperatures. VFD control on circulating pumps is typically the single highest-return energy investment.
- **Sustainability** in cooling water systems encompasses water conservation (maximizing COC, recovering blowdown, using reclaimed water), energy reduction, environmental compliance for chemical discharge, and lifecycle cost analysis of cooling technologies.

??? question "Review: A cooling water system's heat exchanger approach temperature has increased from 8°F to 14°F over the past three months, while the corrosion rate has remained stable at 2 mpy. The water chemistry shows pH 8.2, conductivity 2,400 µS/cm, calcium hardness 650 ppm, and total alkalinity 380 ppm at a water temperature of 105°F. Calculate the approximate LSI, identify the most likely cause of the rising approach temperature, and explain how AI monitoring would detect and address this problem earlier."
    **LSI Calculation:**

    The LSI = pH - pHs. Given the high calcium hardness (650 ppm), high alkalinity (380 ppm), and high temperature (105°F), the saturation pH (pHs) will be approximately 7.2-7.4, giving an LSI of approximately +0.8 to +1.0. This is in the **moderately scale-forming** range.

    **Most likely cause of rising approach temperature:**

    The stable corrosion rate rules out corrosion as the cause. The positive LSI combined with high calcium and alkalinity indicates **calcium carbonate scale formation** on the heat exchanger tubes. The scale acts as insulation, reducing heat transfer and increasing the approach temperature. The 6°F increase in approach temperature is consistent with approximately 1/32 to 1/16 inch of scale accumulation, which would cause roughly 10-25% reduction in heat transfer efficiency.

    **Recommended actions:**
    1. Clean the heat exchanger to remove existing scale
    2. Increase scale inhibitor dosage
    3. Consider adding acid feed to lower pH to 7.8-8.0, bringing the LSI closer to zero
    4. Evaluate increasing blowdown to reduce the calcium concentration
    5. Consider softening the makeup water if calcium levels remain problematic

    **How AI monitoring would help:**

    AI monitoring would detect the gradually rising approach temperature within the first week or two — long before the 6°F increase accumulated over three months. The AI would correlate the approach temperature trend with the positive LSI, high calcium, and high alkalinity, and generate an alert: "Heat exchanger HX-101 approach temperature trending upward. LSI = +0.9 (scale-forming). Recommend increasing scale inhibitor dosage and scheduling cleaning within 14 days." This early intervention would prevent the 25% energy penalty that accumulated over three months, saving thousands of dollars in wasted energy. The AI would also monitor the effectiveness of the corrective action by tracking whether the approach temperature stabilizes or continues to rise after treatment adjustments.
