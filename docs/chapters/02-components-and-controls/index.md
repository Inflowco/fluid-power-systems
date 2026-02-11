---
title: Chapter 2 - System Components and Smart Controls
description: Pumps, fans, compressors, valves, and filters with introduction to PLCs, IoT sensors, and real-time data collection
generated_by: claude skill chapter-content-generator
date: 2026-02-09 14:31:48
version: 0.04
---

# Chapter 2: System Components and Smart Controls

## Summary

This chapter introduces the core mechanical components found across all fluid power systems—pumps, fans, compressors, valves, and filters—and explains their function, operation, and basic maintenance. It then introduces smart controls including Programmable Logic Controllers (PLCs) and Internet of Things (IoT) sensors, showing how these technologies collect real-time data on component health. Students will learn to connect sensors to components, read live data on tablets or apps, and understand how sensor data supports predictive maintenance decisions.

## Concepts Covered

1. Pumps — types, function, and maintenance
2. Fans — types, function, and maintenance
3. Compressors — types, function, and maintenance
4. Valves — types, function, and maintenance
5. Filters — types, function, and maintenance
6. Programmable Logic Controllers (PLCs)
7. IoT Sensors — types and applications
8. Real-time data collection
9. Sensor data for component health monitoring
10. Smart controls overview
11. Basic component troubleshooting
12. Preventive vs. predictive maintenance introduction

## Prerequisites

- Chapter 1: Introduction to Fluid Power Systems and AI (understanding of fluid types, basic system concepts, and the role of AI)

---

## 2.1 The Building Blocks of Fluid Power

Every fluid power system—whether it moves air through a building, pushes hydraulic fluid through a cylinder, or circulates cooling water through a factory—relies on a common set of mechanical components. Understanding these building blocks is the first step toward maintaining, troubleshooting, and optimizing any system you will encounter on the job.

Think of these components as the "organs" of a fluid power system. Just as the heart pumps blood, the lungs move air, and valves control flow through the circulatory system, the mechanical components in a fluid power system each serve a specific function. When one component fails or degrades, the entire system suffers.

In this chapter, we will cover five core component categories—pumps, fans, compressors, valves, and filters—then introduce the smart controls and sensors that modern technicians use to monitor these components in real time.

| Component | Primary Function | Working Fluid | Common Systems |
|-----------|-----------------|---------------|----------------|
| Pumps | Move liquids through piping | Water, oil, coolant | Hydraulic, cooling, pumping |
| Fans | Move air or gas through ducts | Air, gases | HVAC, dust collection, ventilation |
| Compressors | Increase gas pressure | Air, refrigerant | Compressed air, HVAC (refrigeration) |
| Valves | Control fluid flow direction and rate | Any fluid | All fluid power systems |
| Filters | Remove contaminants from fluid | Any fluid | All fluid power systems |

## 2.2 Pumps

Pumps are mechanical devices that transfer energy to a fluid, causing it to move from one location to another. They are among the most common components in fluid power systems, found everywhere from basement sump pits to massive industrial cooling loops.

### 2.2.1 How Pumps Work

All pumps operate on the same basic principle: they create a pressure difference that forces fluid to move. The pump takes in fluid at low pressure (the suction side) and discharges it at higher pressure (the discharge side). The energy to create this pressure difference comes from an electric motor, engine, or other power source connected to the pump.

There are two broad categories of pumps:

- **Positive displacement pumps** trap a fixed volume of fluid and force it through the discharge. They deliver a consistent flow regardless of system pressure. Examples include gear pumps, piston pumps, and diaphragm pumps.
- **Dynamic (centrifugal) pumps** use a spinning impeller to add velocity to the fluid, which is then converted to pressure. Their flow rate varies with system pressure. These are the most common pumps in HVAC and water systems.

#### Diagram: Pump Types Comparison

<iframe src="../../sims/pump-types-comparison/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Pump Types Comparison</summary>
Type: diagram

Bloom Taxonomy: Understand (L2)
Bloom Verb: compare, classify
Learning Objective: Students will be able to compare positive displacement and centrifugal pump operating principles and classify common pump types into the correct category.

Purpose: Show a side-by-side visual comparison of positive displacement vs. centrifugal pump operation

Layout: Split-screen with two animated pump cross-sections

Left side — Positive Displacement Pump (Gear Pump):
- Two interlocking gears rotating inside a housing
- Fluid trapped between gear teeth and housing wall
- Arrows showing fluid path from suction to discharge
- Labels: "Suction Port," "Discharge Port," "Gears," "Housing"

Right side — Centrifugal Pump:
- Spinning impeller inside a volute casing
- Fluid enters at center (eye) and exits at outer edge
- Arrows showing radial flow pattern
- Labels: "Suction Eye," "Impeller," "Volute Casing," "Discharge"

Below each pump diagram — Classification tree:
- Positive displacement branch: Gear, Piston, Diaphragm, Vane
- Centrifugal branch: End-suction, Split-case, Vertical turbine, Submersible

Interactive elements:
- Hover over each pump type name to see a brief description and typical application
- Click on either pump diagram to see a slow-motion animation of fluid flow

Color scheme: Blue for fluid, gray for metal components, green arrows for flow direction
Responsive design: Must respond to window resize events

Implementation: p5.js with interactive hover tooltips
</details>

### 2.2.2 Common Pump Types in Fluid Power

| Pump Type | Category | Typical Application | Key Advantage |
|-----------|----------|-------------------|---------------|
| Centrifugal | Dynamic | HVAC chilled water, cooling towers | High flow, low maintenance |
| Gear | Positive displacement | Hydraulic systems, lubrication | Consistent flow, handles viscous fluids |
| Piston | Positive displacement | High-pressure hydraulics | Very high pressure capability |
| Diaphragm | Positive displacement | Chemical dosing, wastewater | Handles corrosive and abrasive fluids |
| Submersible | Dynamic | Sump pits, wells, wastewater | Operates submerged, compact design |
| Vane | Positive displacement | Vacuum systems, fuel transfer | Quiet operation, self-priming |

### 2.2.3 Pump Maintenance Basics

Regular pump maintenance prevents costly failures and keeps systems running efficiently. Key maintenance tasks include:

- **Check for leaks** at seals, gaskets, and pipe connections
- **Monitor vibration** levels — increasing vibration often signals bearing wear or impeller imbalance
- **Inspect and replace seals** before they fail completely
- **Check fluid levels and quality** — contaminated or low fluid damages internal components
- **Listen for unusual sounds** — cavitation (a rattling sound like marbles) indicates the pump is not receiving enough fluid
- **Verify alignment** between the pump and motor shafts — misalignment causes premature bearing failure
- **Record performance data** — flow rate, pressure, temperature, and power consumption

!!! tip "Technician Tip: Cavitation"
    If a pump sounds like it is pumping gravel, it may be cavitating. Cavitation happens when the fluid pressure at the suction drops below the fluid's vapor pressure, causing tiny vapor bubbles to form and then collapse violently inside the pump. This destroys impellers and seals rapidly. Common causes include clogged suction strainers, suction pipes that are too small, or fluid that is too hot.

## 2.3 Fans

Fans move air or gas through ductwork, enclosures, or open spaces. They are essential in HVAC, dust collection, and ventilation systems. While fans may seem straightforward, proper selection, installation, and maintenance directly affect energy consumption, noise levels, and air quality.

### 2.3.1 Fan Types

Fans fall into two main categories based on airflow direction:

- **Axial fans** move air parallel to the fan shaft (like a household box fan or airplane propeller). They are best for high-volume, low-pressure applications such as general ventilation and cooling.
- **Centrifugal (radial) fans** move air perpendicular to the fan shaft by spinning it outward through a scroll-shaped housing. They handle higher pressures and are common in dust collection and HVAC air handling units.

Key fan performance characteristics include:

- **CFM (Cubic Feet per Minute)** — the volume of air the fan moves
- **Static pressure** — the pressure the fan must overcome to push air through ducts and filters
- **RPM (Revolutions Per Minute)** — the speed of the fan wheel
- **BHP (Brake Horsepower)** — the power consumed by the fan

### 2.3.2 Fan Maintenance

Fan maintenance focuses on keeping the rotating assembly balanced, the drive components in good condition, and airflow unobstructed:

- **Inspect belts** for wear, cracking, and proper tension (on belt-driven fans)
- **Check bearing lubrication** and listen for grinding or squealing
- **Clean fan blades** — dust buildup causes imbalance and reduces performance
- **Perform vibration analysis** — excessive vibration indicates imbalance, misalignment, or bearing wear
- **Inspect and clean inlet screens and filters** to ensure adequate airflow
- **Check for noise** — unusual noise often indicates a developing problem

## 2.4 Compressors

Compressors increase the pressure of a gas (usually air) by reducing its volume. They are the heart of compressed air systems and also play a critical role in HVAC refrigeration cycles. Compressed air is often called the "fourth utility" after electricity, natural gas, and water because of its widespread industrial use.

### 2.4.1 Compressor Types

| Type | Operating Principle | Typical Pressure | Best For |
|------|-------------------|-----------------|----------|
| Reciprocating (piston) | Piston compresses air in a cylinder | Up to 6,000 psi | Small shops, high-pressure applications |
| Rotary screw | Two helical screws compress air continuously | 100–250 psi | Industrial plants, continuous duty |
| Rotary vane | Sliding vanes in a rotor compress air | 50–150 psi | Low-noise, moderate duty |
| Scroll | Two spiral elements compress air | 100–150 psi | Quiet environments, medical/dental |
| Centrifugal | High-speed impeller accelerates air | 100–150 psi | Very large volumes, oil-free air |

### 2.4.2 Compressor Maintenance

Because compressors operate at high pressures and temperatures, regular maintenance is critical for both performance and safety:

- **Check and change oil** (on oil-lubricated types) at manufacturer-recommended intervals
- **Replace air intake filters** — dirty filters reduce efficiency and increase energy consumption
- **Drain condensate** from the receiver tank and drip legs daily
- **Inspect belts and couplings** for wear
- **Check safety relief valves** to ensure they operate correctly
- **Monitor operating temperature and pressure** — high readings may indicate problems
- **Inspect air lines and fittings** for leaks — compressed air leaks waste significant energy

## 2.5 Valves

Valves are devices that control the flow of fluids through a system. They are present in virtually every fluid power system, from simple water faucets to complex hydraulic circuits. A technician who understands valves can diagnose and solve many common system problems.

### 2.5.1 Valve Functions

Valves serve several key functions in fluid power systems:

- **On/Off control** — fully opening or closing a flow path (isolation valves)
- **Flow regulation** — adjusting the rate of fluid flow (throttling valves)
- **Direction control** — routing fluid to different parts of a system (directional control valves)
- **Pressure regulation** — maintaining a set pressure level (pressure relief and reducing valves)
- **Backflow prevention** — allowing flow in only one direction (check valves)

### 2.5.2 Common Valve Types

| Valve Type | Function | How It Works | Common Application |
|------------|----------|-------------|-------------------|
| Gate valve | On/off | Wedge slides up/down to open/close | Water mains, isolation |
| Ball valve | On/off | Ball with hole rotates to align or block flow | Quick shutoff, gas lines |
| Globe valve | Throttling | Plug moves up/down to regulate flow | Steam lines, flow control |
| Butterfly valve | On/off, throttling | Disc rotates inside pipe | Large HVAC ducts, water lines |
| Check valve | Backflow prevention | Flap or ball allows flow in one direction only | Pump discharge, water supply |
| Solenoid valve | On/off (electrically controlled) | Electromagnetic coil opens/closes valve | Automated systems, PLC control |
| Pressure relief | Safety/pressure regulation | Spring-loaded disc opens at set pressure | Safety protection in all systems |

#### Diagram: Valve Types Interactive Guide

<iframe src="../../sims/valve-types-guide/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Valve Types Interactive Guide</summary>
Type: infographic

Bloom Taxonomy: Remember (L1)
Bloom Verb: identify, recognize
Learning Objective: Students will be able to identify common valve types by appearance and recognize their function in a fluid power system.

Purpose: Interactive visual guide showing cross-sections of the seven common valve types with hover-triggered descriptions

Layout: Grid of seven valve cross-section illustrations, 3 columns by 3 rows (last row centered), each showing the valve in both open and closed positions

Valve illustrations (each showing internal cross-section):
1. Gate Valve — wedge-shaped gate, handwheel, body
2. Ball Valve — sphere with bore, quarter-turn handle
3. Globe Valve — plug and seat, handwheel, S-shaped flow path
4. Butterfly Valve — disc on shaft, lever/gear operator
5. Check Valve — hinged flap or spring-loaded ball
6. Solenoid Valve — electromagnetic coil, plunger, ports
7. Pressure Relief Valve — spring, poppet, adjustment screw

Interactive elements:
- Hover over any valve: tooltip appears with name, function, and one typical application
- Click any valve: cross-section animates between open and closed positions
- Color-coded border indicates function category (blue = on/off, green = throttling, orange = safety, purple = directional)

Color scheme:
- Valve body: medium gray
- Fluid flow path: blue arrows when open
- Blocked flow: red X when closed
- Moving parts: highlighted in steel/silver

Responsive design: Grid adjusts from 3 columns to 2 columns to 1 column on smaller screens. Must respond to window resize events.

Implementation: HTML/CSS/JavaScript with SVG valve illustrations and CSS animations
</details>

### 2.5.3 Valve Maintenance

Valves generally require less frequent maintenance than rotating equipment, but neglecting them can lead to leaks, stuck valves, and system failures:

- **Exercise valves regularly** — valves that sit in one position for long periods can become stuck from corrosion or scale buildup
- **Check for leaks** at packing glands and body joints
- **Inspect seats and seals** for wear and damage
- **Verify proper operation** — ensure valves open and close fully
- **Lubricate stems and actuators** as recommended by the manufacturer

## 2.6 Filters

Filters remove unwanted particles, contaminants, and impurities from the fluid in a system. Clean fluid is essential for protecting components, maintaining efficiency, and ensuring product quality. A clogged or failed filter can cause damage throughout an entire system.

### 2.6.1 Filter Types and Applications

- **Air intake filters** protect compressors and engines from dust and debris
- **Hydraulic filters** remove particles from hydraulic oil to protect pumps, valves, and actuators
- **HVAC air filters** remove dust, pollen, and contaminants from building air (rated by MERV scale)
- **Water filters** remove sediment, chemicals, and biological contaminants from cooling and process water
- **Dust collection filters** (bag filters, cartridge filters) capture particulates from industrial air streams

### 2.6.2 Measuring Filter Condition

The primary indicator of filter condition is **differential pressure** — the pressure difference across the filter. As a filter captures contaminants, the differential pressure increases. When it reaches a manufacturer-specified limit, the filter needs cleaning or replacement.

Modern systems use differential pressure sensors connected to the control system that automatically alert technicians when filters need attention. This is a simple but powerful example of data-driven maintenance.

#### Diagram: Filter Differential Pressure Monitor

<iframe src="../../sims/filter-pressure-monitor/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Filter Differential Pressure Monitor</summary>
Type: microsim

Bloom Taxonomy: Apply (L3)
Bloom Verb: demonstrate, calculate
Learning Objective: Students will be able to demonstrate how differential pressure changes as a filter loads with contaminants and calculate when a filter needs replacement based on pressure readings.

Purpose: Interactive simulation showing how filter differential pressure increases over time as contaminants accumulate, and when maintenance is triggered

Canvas layout:
- Top area: Animated cross-section of a filter element showing particle accumulation
- Middle area: Real-time differential pressure gauge (0–10 inches of water column)
- Bottom area: Controls and data display

Visual elements:
- Filter cross-section showing clean media on left, with particles gradually filling from the upstream side
- Differential pressure gauge with green (0–3 inWC), yellow (3–6 inWC), and red (6+ inWC) zones
- Trend chart showing pressure over simulated time (days)
- Alert indicator that flashes when pressure exceeds threshold
- Particle count display showing approximate contamination level

Interactive controls:
- Slider: "Contamination Rate" (Low / Medium / High) — controls how fast particles accumulate
- Slider: "Filter MERV Rating" (8 / 10 / 12 / 14) — affects how many particles are captured vs. pass through
- Button: "Replace Filter" — resets the simulation to a clean filter state
- Button: "Start / Pause" — controls the simulation
- Number input: "Alert Threshold" (default 5 inWC) — sets when the maintenance alert triggers

Default parameters:
- Contamination rate: Medium
- Filter MERV rating: 10
- Alert threshold: 5 inWC
- Simulation speed: 1 simulated day per second

Behavior:
- As simulation runs, particles accumulate on the filter cross-section
- Differential pressure rises on the gauge and trend chart
- When pressure reaches the alert threshold, a maintenance alert flashes
- If filter is not replaced, pressure continues to rise (filter bypass may occur above 8 inWC)
- Replacing the filter resets the visual and pressure to baseline
- Higher contamination rates cause faster pressure rise
- Higher MERV ratings capture more particles (filter loads faster but air is cleaner)

Instructional Rationale: Parameter exploration with sliders is appropriate because the Apply-level objective requires students to experiment with variables (contamination rate, MERV rating, threshold) to understand cause-and-effect relationships in filter maintenance timing.

Responsive design: Must respond to window resize events. Canvas width adjusts to container.

Implementation: p5.js with animated particles and gauge elements
</details>

### 2.6.3 Filter Maintenance

- **Monitor differential pressure** regularly (or rely on automated sensors)
- **Replace or clean filters on schedule** — never let a filter bypass due to excessive loading
- **Use the correct replacement filter** — wrong size or rating can damage equipment or reduce air quality
- **Dispose of used filters properly** — some may contain hazardous materials
- **Document filter changes** in the maintenance log with date, differential pressure reading, and filter type

## 2.7 Introduction to Smart Controls

Traditional fluid power systems relied on manual controls — technicians turned valves by hand, started and stopped motors with switches, and checked gauges by walking through the plant. Modern systems use **smart controls** that automate these tasks and collect data for analysis.

Smart controls are the bridge between the mechanical components you just learned about and the AI-driven optimization you will study throughout this course. They include the hardware (controllers and sensors) and software (logic and communication protocols) that monitor and manage system operation.

### 2.7.1 Programmable Logic Controllers (PLCs)

A **Programmable Logic Controller (PLC)** is a ruggedized industrial computer designed to automate control of equipment and processes. PLCs are the most common control devices in fluid power systems. They continuously:

1. **Read inputs** from sensors, switches, and other devices
2. **Execute a program** (control logic) that makes decisions based on those inputs
3. **Write outputs** to motors, valves, indicators, and other devices

For example, a PLC controlling a cooling water pump might:

- Read the water temperature from a sensor
- Compare it to a setpoint (say, 85°F)
- If the temperature exceeds the setpoint, turn on the pump
- If it drops below the setpoint minus a deadband, turn off the pump
- Log the temperature and pump status for review

PLCs are programmed using specialized languages. The most common is **ladder logic**, which uses a graphical format resembling an electrical circuit diagram. Other languages include structured text, function block diagrams, and sequential function charts.

Key advantages of PLCs in fluid power:

- **Reliability** — designed for harsh industrial environments (dust, vibration, temperature extremes)
- **Flexibility** — programs can be modified without rewiring
- **Speed** — scan times measured in milliseconds
- **Communication** — modern PLCs connect to networks, SCADA systems, and cloud platforms
- **Expandability** — modular design allows adding input/output modules as needed

#### Diagram: PLC Control Loop

<iframe src="../../sims/plc-control-loop/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>PLC Control Loop</summary>
Type: diagram

Bloom Taxonomy: Understand (L2)
Bloom Verb: explain, interpret
Learning Objective: Students will be able to explain how a PLC reads sensor inputs, executes control logic, and drives output devices in a closed-loop control system.

Purpose: Illustrate the PLC control loop cycle (Input → Process → Output → Feedback) with a concrete fluid power example

Layout: Circular flow diagram with a central PLC unit and four stages arranged clockwise

Elements to show:
1. Center: PLC unit (rectangular box labeled "PLC" with indicator lights)
2. Top (Input stage): Temperature sensor, pressure sensor, flow switch icons connected to PLC input module
3. Right (Process stage): Ladder logic diagram snippet showing simple temperature comparison
4. Bottom (Output stage): Motor starter, solenoid valve, indicator light icons connected to PLC output module
5. Left (Feedback stage): Arrow from the controlled process (cooling water loop) back to the sensors

Concrete example shown:
- Temperature sensor reads 90°F → PLC input
- Ladder logic: IF temp > 85°F THEN energize pump motor relay
- Output module sends signal to motor starter → pump runs
- Pump circulates cooling water → temperature drops
- Sensor reads new temperature → cycle continues

Annotations:
- "Scan Cycle: 10-50 ms" near center PLC
- "Analog Input (4-20 mA)" near sensor connections
- "Digital Output (24V DC)" near motor starter connection
- "Setpoint: 85°F" near ladder logic

Interactive elements:
- Hover over each stage to see a detailed explanation
- Click on the ladder logic area to see the logic expand with explanation of each rung

Color scheme: Green for inputs, blue for processing, orange for outputs, gray for feedback path
Responsive design: Must respond to window resize events

Implementation: HTML/CSS/JavaScript with SVG elements and hover tooltips
</details>

### 2.7.2 IoT Sensors

The **Internet of Things (IoT)** has brought a new generation of sensors to fluid power systems. Unlike traditional sensors that connect only to a local PLC or gauge, IoT sensors connect to networks (Wi-Fi, cellular, or industrial protocols) and transmit data to cloud platforms where it can be stored, analyzed, and viewed from anywhere.

Common IoT sensors in fluid power systems include:

| Sensor Type | What It Measures | Typical Application |
|-------------|-----------------|-------------------|
| Temperature | Fluid or surface temperature (°F or °C) | Bearing monitoring, HVAC, hydraulic fluid |
| Pressure | Fluid or gas pressure (PSI, bar, inWC) | Filter condition, system pressure, leak detection |
| Vibration | Acceleration and frequency (g, Hz) | Rotating equipment health (pumps, fans, motors) |
| Flow | Volume or mass flow rate (GPM, CFM) | System performance, leak detection |
| Current/Power | Electrical consumption (amps, kW) | Motor efficiency, load monitoring |
| Level | Fluid level in tanks (inches, %) | Reservoir monitoring, tank level |
| Humidity | Moisture content in air (% RH) | HVAC, compressed air quality |
| Water quality | pH, conductivity, turbidity | Cooling water treatment |

### 2.7.3 How IoT Sensors Transform Maintenance

Traditional maintenance relies on scheduled inspections — a technician walks through the plant on a set schedule, checks gauges, listens for unusual sounds, and records readings on a clipboard. This approach has two major drawbacks:

1. **Problems can develop between inspections** — a bearing might fail the day after it was checked
2. **Routine checks consume labor hours** — a technician might check 100 data points and find only 1 that needs attention

IoT sensors change this equation by providing **continuous monitoring**. Instead of checking a pump bearing temperature once a week, a wireless vibration sensor reports data every few minutes. If something changes, the system alerts the technician immediately — no waiting until the next inspection.

This shift from **time-based maintenance** (check it every Tuesday) to **condition-based maintenance** (check it when the data says something changed) is the foundation of predictive maintenance, which you will study in depth throughout this course.

#### Diagram: Traditional vs. Smart Maintenance Workflow

<iframe src="../../sims/maintenance-workflow-comparison/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Traditional vs. Smart Maintenance Workflow</summary>
Type: workflow

Bloom Taxonomy: Analyze (L4)
Bloom Verb: compare, differentiate
Learning Objective: Students will be able to compare traditional time-based maintenance with IoT-enabled condition-based maintenance and differentiate the key advantages of each approach.

Purpose: Side-by-side workflow comparison showing traditional scheduled maintenance versus IoT-enabled condition-based maintenance

Layout: Two parallel vertical flowcharts, one for traditional and one for smart/IoT approach

Left Flowchart — Traditional Time-Based Maintenance:
1. Start: "Calendar trigger (e.g., every Tuesday)"
   Hover: "Maintenance is scheduled by date regardless of equipment condition"
2. Process: "Technician walks to equipment"
   Hover: "Physical presence required at each check point"
3. Process: "Manual readings (gauges, clipboard)"
   Hover: "Temperature, pressure, vibration readings recorded by hand"
4. Decision: "Any readings out of range?"
   Hover: "Technician compares readings to known limits"
5a. Yes → Process: "Submit work order for repair"
   Hover: "Paper or CMMS work order created"
5b. No → Process: "Log 'OK' and move to next equipment"
   Hover: "95% of checks typically find no issues"
6. End: "Repeat next scheduled period"

Right Flowchart — IoT-Enabled Condition-Based Maintenance:
1. Start: "IoT sensors stream data continuously"
   Hover: "Wireless sensors report temperature, vibration, pressure every 1-5 minutes"
2. Process: "Data transmitted to cloud/edge platform"
   Hover: "Data stored and processed automatically 24/7"
3. Process: "AI/analytics engine compares to baselines"
   Hover: "Software detects trends, anomalies, and threshold violations"
4. Decision: "Anomaly or trend detected?"
   Hover: "System identifies changes before they become failures"
5a. Yes → Process: "Automated alert sent to technician"
   Hover: "Push notification to phone/tablet with specific issue and location"
5b. No → Process: "Data logged, trends updated"
   Hover: "Historical record builds for long-term analysis"
6. End: "Continuous monitoring continues"

Comparison callouts between the two flows:
- Arrow from Traditional step 2 to IoT step 1: "Eliminates routine walk-around inspections"
- Arrow from Traditional step 4 to IoT step 3: "Catches issues between scheduled checks"
- Arrow from Traditional step 5b to IoT step 5b: "Builds historical data automatically"

Color coding:
- Traditional flow: orange/amber tones
- IoT flow: blue/teal tones
- Decision diamonds: yellow
- Comparison arrows: green dashed

Interactive elements:
- Hover over each step to see detailed explanation
- Click comparison arrows to see a detailed side-by-side benefit analysis

Responsive design: Flows stack vertically on narrow screens. Must respond to window resize events.

Implementation: HTML/CSS/JavaScript with SVG flowchart elements
</details>

## 2.8 Real-Time Data Collection

Real-time data collection is the process of gathering sensor measurements from equipment as they happen, with no significant delay. This data forms the foundation for everything from simple alarm systems to sophisticated AI analytics.

### 2.8.1 Data Collection Architecture

A typical real-time data collection system in a fluid power facility has three layers:

1. **Field layer** — sensors and transmitters physically attached to equipment
2. **Communication layer** — wires, wireless networks, or industrial protocols that carry data
3. **Application layer** — software platforms that store, display, and analyze data

Common communication protocols include:

- **4-20 mA analog signals** — traditional hardwired connection from sensor to PLC
- **Modbus** — industrial serial communication protocol (widely used with PLCs)
- **BACnet** — building automation protocol common in HVAC systems
- **MQTT** — lightweight messaging protocol popular with IoT devices
- **OPC UA** — open standard for industrial data exchange

### 2.8.2 What Data to Collect

Not every measurement is equally valuable. Good data collection focuses on parameters that reveal equipment health and system performance. The table below shows key parameters for each major component type:

| Component | Priority 1 (Always Monitor) | Priority 2 (Recommended) | Priority 3 (Nice to Have) |
|-----------|---------------------------|-------------------------|--------------------------|
| Pumps | Vibration, discharge pressure | Motor current, temperature | Suction pressure, flow rate |
| Fans | Vibration, motor current | Belt tension (where applicable) | Noise level, airflow |
| Compressors | Discharge pressure, temperature | Oil level/condition, current | Inlet filter differential pressure |
| Valves | Position feedback | Actuator response time | Seat leakage |
| Filters | Differential pressure | Flow rate | Particle count (downstream) |

### 2.8.3 From Data to Decisions

Collecting data is only valuable if it leads to better decisions. Here is how raw sensor data transforms into actionable maintenance intelligence:

1. **Data capture** — sensor reads a value (e.g., pump vibration = 0.15 in/s)
2. **Data transmission** — value sent to controller or cloud platform
3. **Data storage** — value logged with timestamp in a database
4. **Trend analysis** — software compares current value to historical baseline
5. **Alert generation** — if value exceeds threshold or trend is abnormal, alert is created
6. **Decision support** — technician reviews alert with context (trend chart, similar equipment history)
7. **Action** — technician schedules maintenance, adjusts settings, or investigates further

#### Diagram: Sensor Data to Maintenance Decision Pipeline

<iframe src="../../sims/data-decision-pipeline/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Sensor Data to Maintenance Decision Pipeline</summary>
Type: microsim

Bloom Taxonomy: Understand (L2)
Bloom Verb: explain, interpret
Learning Objective: Students will be able to explain how raw sensor data is processed through a pipeline to generate maintenance decisions, tracing concrete data values through each stage.

Purpose: Step-through simulation showing how a single sensor reading travels from the physical sensor through data processing to a maintenance decision

Data Visibility Requirements:
Stage 1: Show raw sensor reading — "Pump #3 Vibration Sensor: 0.28 in/s" with timestamp
Stage 2: Show data transmission — value arrives at cloud platform, stored in database row with fields (timestamp, sensor_id, value, unit)
Stage 3: Show trend comparison — current value (0.28 in/s) plotted against 30-day history, showing baseline of 0.08 in/s and gradual upward trend
Stage 4: Show threshold evaluation — value compared against alarm levels: Normal (<0.15), Warning (0.15–0.30), Critical (>0.30). Current reading falls in Warning zone.
Stage 5: Show alert generation — alert card displays: "WARNING — Pump #3 vibration trending up. Current: 0.28 in/s. Baseline: 0.08 in/s. Rate of change: +0.04 in/s per week. Estimated time to critical: ~5 days."
Stage 6: Show maintenance decision — technician review screen with options: "Schedule bearing inspection within 3 days" (recommended), "Continue monitoring," "Emergency shutdown"

Canvas layout:
- Main area: large display panel showing current stage content
- Bottom: step navigation with Previous / Next buttons and stage indicator (1 of 6)
- Right sidebar: pipeline progress indicator showing all 6 stages with current stage highlighted

Interactive controls:
- Next / Previous buttons to step through stages
- At Stage 3: slider to adjust the "current reading" value and see how the trend and alert change
- At Stage 5: toggle between different alert severity examples

Instructional Rationale: Step-through with concrete data values is appropriate because the Understand/explain objective requires learners to trace specific data through each transformation stage. Continuous animation would obscure the data values and prevent students from studying each stage.

Responsive design: Must respond to window resize events. Layout adjusts for narrow screens.

Implementation: p5.js with stage-based display panels and interactive step controls
</details>

## 2.9 Connecting It All: The Smart Fluid Power System

When you combine mechanical components (pumps, fans, compressors, valves, filters) with smart controls (PLCs, IoT sensors, communication networks), you get a system that can monitor itself, report its condition, and even adjust its own operation for optimal performance.

Consider a complete cooling water system with smart controls:

1. A **centrifugal pump** circulates cooling water through the loop
2. **IoT temperature sensors** measure water temperature at the supply and return
3. A **differential pressure sensor** monitors the strainer (filter) condition
4. A **vibration sensor** on the pump detects developing bearing issues
5. A **VFD (Variable Frequency Drive)** adjusts pump speed based on cooling demand
6. A **PLC** reads all sensor data, runs control logic, and adjusts the VFD
7. All data flows to a **cloud dashboard** where technicians and AI analytics can review trends

This integrated approach means the system can:

- **Automatically adjust** pump speed when cooling demand changes (saving energy)
- **Alert technicians** when the strainer differential pressure rises (filter needs cleaning)
- **Predict bearing failure** by detecting early vibration changes (preventing unplanned downtime)
- **Log all data** for historical analysis and compliance reporting

The remaining chapters in this course will explore each specific system type in detail, building on the component knowledge and smart control concepts you learned here.

### Electrical Power Fundamentals

Understanding basic electrical calculations is essential for any fluid power technician. Motors drive pumps, fans, and compressors, and knowing how to calculate motor power, convert between watts and horsepower, and estimate energy costs helps you size equipment, verify nameplate data, and justify efficiency upgrades.

#### Worked Example: Single-Phase Motor Power

**Given:**

- A single-phase motor operates at 230 V
- The motor draws 15 A
- The power factor (PF) is 0.85

**Find:** The power consumed in watts and the equivalent horsepower (HP)

**Solution:**

1. Calculate power using the single-phase power formula:

\[ P = V \times I \times PF = 230 \times 15 \times 0.85 = 2{,}932.5 \text{ W} \]

2. Convert watts to horsepower (1 HP = 746 W):

\[ HP = \frac{P}{746} = \frac{2{,}932.5}{746} = 3.93 \text{ HP} \]

**Answer:** The motor consumes **2,932.5 W** (approximately **3.93 HP**). Since standard motor sizes jump from 3 HP to 5 HP, this motor would be rated as a **5 HP motor** operating near full load.

> **Practical note:** Always select the next standard motor size above the calculated load. Running a motor above its rated HP causes overheating and premature failure. Standard single-phase motor sizes are 1, 1.5, 2, 3, 5, 7.5, and 10 HP.

#### Worked Example: Three-Phase Motor Power

**Given:**

- A three-phase motor operates at 460 V
- The motor draws 28 A
- The power factor (PF) is 0.87

**Find:** The power consumed in kilowatts (kW) and horsepower (HP)

**Solution:**

1. Calculate power using the three-phase power formula:

\[ P = V \times I \times \sqrt{3} \times PF = 460 \times 28 \times 1.732 \times 0.87 = 19{,}415 \text{ W} \approx 19.4 \text{ kW} \]

2. Convert watts to horsepower:

\[ HP = \frac{P}{746} = \frac{19{,}415}{746} = 26.0 \text{ HP} \]

**Answer:** The motor consumes approximately **19.4 kW** (**26.0 HP**). This is a **25 HP motor** operating at full load (motors typically draw slightly more than their rated HP when fully loaded).

> **Practical note:** Three-phase power is standard for motors above 5 HP in commercial and industrial facilities. The \( \sqrt{3} \) factor (approximately 1.732) accounts for the 120-degree phase offset between the three power lines. If you forget this factor, your calculation will be 42% too low.

#### Worked Example: Motor Efficiency and Annual Energy Cost

**Given:**

- A 25 HP motor has a nameplate efficiency of 91% (\( \eta = 0.91 \))
- The motor runs 6,000 hours per year
- Electricity costs $0.10 per kWh

**Find:** The electrical input power in kW and the annual energy cost

**Solution:**

1. Calculate the input power required from the electrical supply:

\[ \text{Input kW} = \frac{HP \times 0.746}{\eta} = \frac{25 \times 0.746}{0.91} = \frac{18.65}{0.91} = 20.5 \text{ kW} \]

2. Calculate the annual energy consumption:

\[ \text{Annual kWh} = \text{Input kW} \times \text{Hours} = 20.5 \times 6{,}000 = 123{,}000 \text{ kWh} \]

3. Calculate the annual electricity cost:

\[ \text{Annual Cost} = \text{kWh} \times \text{Rate} = 123{,}000 \times \$0.10 = \$12{,}300 \]

**Answer:** The motor draws **20.5 kW** from the electrical supply and costs **$12,300 per year** to operate.

> **Practical note:** The 9% efficiency loss (100% - 91%) is converted to waste heat inside the motor. This is why motor rooms need ventilation. Upgrading from a standard-efficiency motor (89%) to a premium-efficiency motor (93%) on this example would save approximately $1,000 per year — a quick payback on many motor replacements.

## 2.10 Lab Preview: Disassemble a Pump, Connect a Sensor, and View Data

In this week's hands-on lab, you will:

1. **Disassemble a centrifugal pump** to identify the impeller, volute, shaft, seals, and bearings
2. **Reassemble the pump** following proper procedures
3. **Install a wireless vibration sensor** on the pump housing
4. **Connect the sensor** to a tablet or app and verify data is streaming
5. **Run the pump** and observe real-time vibration data on the dashboard
6. **Simulate a fault** (instructor will introduce an imbalance) and observe how the vibration data changes
7. **Record your findings** including baseline readings and fault readings

This lab connects the mechanical knowledge from the first half of this chapter (understanding what is inside a pump) with the smart controls knowledge from the second half (using sensors and data to monitor pump health).

## Key Takeaways

- **Five core components** — pumps, fans, compressors, valves, and filters — are the building blocks of all fluid power systems
- Each component type has multiple variations suited for different applications, pressures, and fluids
- Regular **preventive maintenance** (inspections, lubrication, replacement of wear parts) keeps components running reliably
- **PLCs** automate control by reading sensor inputs, executing logic, and driving outputs in a continuous scan cycle
- **IoT sensors** enable continuous, real-time monitoring of equipment health from anywhere
- The shift from **time-based to condition-based maintenance** reduces both unexpected failures and wasted labor
- **Real-time data collection** transforms raw sensor readings into actionable maintenance intelligence through a pipeline of capture, storage, trending, alerting, and decision support
- Smart controls and sensors are the foundation for the **AI-driven predictive maintenance** strategies you will learn in later chapters

??? question "Review: Can you name the five core components and one maintenance task for each?"
    1. **Pumps** — Check for leaks at seals and connections
    2. **Fans** — Inspect belts for wear and proper tension
    3. **Compressors** — Drain condensate from the receiver tank daily
    4. **Valves** — Exercise valves regularly to prevent them from sticking
    5. **Filters** — Monitor differential pressure and replace when threshold is reached
