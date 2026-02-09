# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-powered intelligent textbook about Fluid Power Systems built with MkDocs and the Material theme. The course covers HVAC, vacuum, compressed air, cooling water, dust collection, hydraulics, pumping, and fan systems with AI integration.

Content follows Bloom's Taxonomy (Remember → Understand → Apply → Analyze → Evaluate → Create) and includes interactive MicroSims for visualization.

## Common Commands

```bash
# Activate the mkdocs conda environment
conda activate mkdocs

# Local development server (http://localhost:8000)
mkdocs serve

# Build static site to /site directory
mkdocs build

# Deploy to GitHub Pages (does NOT commit to git)
mkdocs gh-deploy
```

## Project Structure

```
fluid-power-systems/
├── docs/
│   ├── chapters/           # 12 course chapters (01-intro through 12-safety)
│   ├── sims/               # Interactive MicroSims
│   │   ├── learning-graph/ # Vis.js concept dependency visualization
│   │   └── pascals-law/    # Physics simulator
│   ├── prompts/            # AI prompt engineering documentation
│   ├── css/extra.css       # Custom styles (prompt admonitions, copy buttons)
│   └── js/extra.js         # Copy-to-clipboard functionality
├── src/csv-to-jason/       # CSV to JSON converter for learning graphs
│   ├── csv-to-json.py
│   ├── fluid-power-systems.csv
│   └── fluid-power-systems.json
├── mkdocs.yml              # Site configuration and navigation
└── site/                   # Built output (gitignored)
```

## Learning Graph Data Flow

The concept dependency graph follows this pipeline:

```
fluid-power-systems.csv → csv-to-json.py → fluid-power-systems.json → Vis.js visualization
```

CSV format: `ConceptID,ConceptLabel,Dependencies,TaxonomyID`
- Dependencies are pipe-delimited (`1|2|3`)
- Run converter from within `src/csv-to-jason/`: `python csv-to-json.py`

## MicroSim Structure

Each MicroSim in `docs/sims/[name]/` contains:
- `index.md` - MkDocs page with iframe embed and fullscreen button
- HTML/JS/CSS files for the interactive simulation
- Data files (JSON) for visualization libraries

## Navigation Updates

After adding any `.md` file to `docs/`, update the `nav:` section in `mkdocs.yml` to include it in site navigation.

## Custom Admonitions

The site uses a custom "prompt" admonition style with copy functionality:

```markdown
!!! prompt
    Your prompt text here
```
