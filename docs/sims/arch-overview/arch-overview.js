// Intelligent Textbook Architecture
// Interactive vis-network diagram showing the textbook build workflow

// ===========================================
// CONFIGURATION
// ===========================================

const categoryColors = {
    person: {
        background: '#2196f3',
        border: '#1565c0',
        font: '#ffffff'
    },
    tool: {
        background: '#9c27b0',
        border: '#6a1b9a',
        font: '#ffffff'
    },
    ai: {
        background: '#ff9800',
        border: '#e65100',
        font: '#ffffff'
    },
    build: {
        background: '#4caf50',
        border: '#2e7d32',
        font: '#ffffff'
    },
    infra: {
        background: '#78909c',
        border: '#455a64',
        font: '#ffffff'
    },
    output: {
        background: '#ffd700',
        border: '#f9a825',
        font: '#333333'
    }
};

const highlightColors = {
    background: '#ffeb3b',
    border: '#f57f17',
    font: '#333333'
};

// ===========================================
// STATE VARIABLES
// ===========================================
let graphData = null;
let nodeData = [];
let edgeData = [];
let nodes, edges, network;
let selectedNode = null;

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

function isSaveEnabled() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('enable-save') === 'true';
}

function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// ===========================================
// DATA LOADING
// ===========================================

async function loadGraphData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        graphData = await response.json();
        nodeData = graphData.nodes;
        edgeData = graphData.edges;
        return true;
    } catch (error) {
        console.error('Error loading graph data:', error);
        nodeData = [];
        edgeData = [];
        return false;
    }
}

// ===========================================
// VIEW POSITIONING
// ===========================================

function setupViewPosition() {
    network.once('afterDrawing', function() {
        const currentPosition = network.getViewPosition();
        network.moveTo({
            position: {
                x: currentPosition.x + 60,
                y: currentPosition.y
            },
            animation: false
        });
    });
}

// ===========================================
// NETWORK INITIALIZATION
// ===========================================

function initializeNetwork() {
    selectedNode = null;

    // Transform nodes for vis-network with category colors
    const visNodes = nodeData.map(node => {
        const colorSet = categoryColors[node.category] || categoryColors.person;
        return {
            id: node.id,
            label: node.label,
            x: node.x,
            y: node.y,
            color: {
                background: colorSet.background,
                border: colorSet.border,
                highlight: {
                    background: highlightColors.background,
                    border: highlightColors.border
                },
                hover: {
                    background: colorSet.background,
                    border: highlightColors.border
                }
            },
            font: {
                color: colorSet.font,
                size: 16,
                face: 'Arial',
                multi: true
            }
        };
    });

    // Transform edges for vis-network
    const visEdges = edgeData.map((edge, index) => {
        const isBidirectional = edge.arrows === 'to;from';
        return {
            id: index,
            from: edge.from,
            to: edge.to,
            label: edge.label || '',
            color: { color: '#555555', highlight: '#f57f17' },
            width: 2,
            font: { size: 11, color: '#666', strokeWidth: 3, strokeColor: '#ffffff' },
            arrows: {
                to: { enabled: true, scaleFactor: 1 },
                from: { enabled: isBidirectional, scaleFactor: 1 }
            }
        };
    });

    nodes = new vis.DataSet(visNodes);
    edges = new vis.DataSet(visEdges);

    const saveEnabled = isSaveEnabled();
    const enableMouseInteraction = saveEnabled || !isInIframe();

    const options = {
        layout: {
            improvedLayout: false
        },
        physics: {
            enabled: false
        },
        interaction: {
            selectConnectedEdges: true,
            zoomView: enableMouseInteraction,
            dragView: enableMouseInteraction,
            dragNodes: saveEnabled,
            navigationButtons: enableMouseInteraction,
            hover: true
        },
        nodes: {
            shape: 'box',
            margin: { top: 12, bottom: 12, left: 16, right: 16 },
            font: {
                size: 16,
                face: 'Arial'
            },
            borderWidth: 3,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.2)',
                size: 5,
                x: 2,
                y: 2
            }
        },
        edges: {
            arrows: {
                to: { enabled: true, scaleFactor: 1.2 }
            },
            width: 2,
            smooth: {
                type: 'curvedCW',
                roundness: 0.1
            }
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Set up event handlers
    network.on('hoverNode', handleNodeHover);
    network.on('blurNode', handleNodeBlur);
    network.on('click', handleNodeClick);

    if (saveEnabled) {
        network.on('dragEnd', handleDragEnd);
    }

    setupViewPosition();
}

// ===========================================
// EVENT HANDLERS
// ===========================================

function handleNodeClick(params) {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = nodeData.find(n => n.id === nodeId);
        if (node) {
            showNodeDetails(node);
        }
    } else {
        // Clicked on empty space - clear selection
        const infoPanel = document.getElementById('info-panel');
        if (infoPanel) {
            infoPanel.style.display = 'none';
        }
    }
}

function handleNodeHover(params) {
    const nodeId = params.node;
    const node = nodeData.find(n => n.id === nodeId);
    if (node) {
        showNodeDetails(node);
    }
}

function handleNodeBlur(params) {
    // Keep panel visible if a node is selected (clicked)
    if (!selectedNode) {
        const infoPanel = document.getElementById('info-panel');
        if (infoPanel) {
            infoPanel.style.display = 'none';
        }
    }
}

function showNodeDetails(node) {
    const infoPanel = document.getElementById('info-panel');
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');

    if (infoPanel && infoContent) {
        const cleanLabel = node.label.replace('\n', ' ');
        infoTitle.textContent = cleanLabel;
        infoContent.innerHTML = `<p>${node.description}</p>`;
        infoPanel.style.display = 'block';
    }
}

// ===========================================
// NODE POSITION SAVING (Editor Mode)
// ===========================================

function handleDragEnd(params) {
    if (params.nodes.length > 0) {
        params.nodes.forEach(nodeId => {
            const position = network.getPositions([nodeId])[nodeId];
            const nodeIndex = nodeData.findIndex(n => n.id === nodeId);
            if (nodeIndex !== -1) {
                nodeData[nodeIndex].x = Math.round(position.x);
                nodeData[nodeIndex].y = Math.round(position.y);
            }
        });
    }
}

function saveNodePositions() {
    graphData.nodes = nodeData;
    graphData.metadata.lastUpdated = new Date().toISOString().split('T')[0];
    const jsonString = JSON.stringify(graphData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===========================================
// UI UPDATES
// ===========================================

function reset() {
    initializeNetwork();
}

// ===========================================
// INITIALIZATION
// ===========================================

document.addEventListener('DOMContentLoaded', async function() {
    await loadGraphData();
    initializeNetwork();

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', reset);
    }

    if (isSaveEnabled()) {
        const saveBtn = document.getElementById('save-btn');
        if (saveBtn) {
            saveBtn.style.display = 'block';
            saveBtn.addEventListener('click', saveNodePositions);
        }
    }
});
