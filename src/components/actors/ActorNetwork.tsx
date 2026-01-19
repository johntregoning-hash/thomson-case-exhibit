/**
 * ActorNetwork Component - V2 Design
 *
 * Interactive force-directed graph showing relationships between
 * actors, organisations, and findings in the case.
 *
 * Uses SVG with CSS transforms for smooth animations.
 * No external graph library required.
 */

import { useState, useEffect, useRef, useCallback } from 'react';

interface Actor {
  id: string;
  name: string;
  role: string;
  organisation: string;
  classification: string;
  critical?: boolean;
  relatedFindings?: string[];
}

interface NetworkNode {
  id: string;
  type: 'actor' | 'organisation' | 'finding';
  label: string;
  classification?: string;
  critical?: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface NetworkLink {
  source: string;
  target: string;
  type: 'works_at' | 'related_finding';
}

interface ActorNetworkProps {
  actors: Actor[];
  basePath: string;
}

export default function ActorNetwork({ actors, basePath }: ActorNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [nodes, setNodes] = useState<NetworkNode[]>([]);
  const [links, setLinks] = useState<NetworkLink[]>([]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(true);
  const animationRef = useRef<number>();

  // Classification colors
  const getNodeColor = (node: NetworkNode) => {
    if (node.type === 'organisation') return '#6366f1'; // indigo
    if (node.type === 'finding') return '#d4af37'; // gold
    switch (node.classification) {
      case 'DEFENDANT': return '#ef4444'; // red
      case 'WITNESS_FAVOURABLE':
      case 'CURRENT_CARE': return '#22c55e'; // green
      case 'WITNESS_ADVERSE': return '#f59e0b'; // amber
      default: return '#64748b'; // slate
    }
  };

  // Initialize nodes and links from actors data
  useEffect(() => {
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    // Create actor nodes
    const actorNodes: NetworkNode[] = actors.map((actor, i) => {
      const angle = (i / actors.length) * 2 * Math.PI;
      const radius = 150 + Math.random() * 100;
      return {
        id: actor.id,
        type: 'actor',
        label: actor.name,
        classification: actor.classification,
        critical: actor.critical,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: actor.critical ? 30 : 24,
      };
    });

    // Create organisation nodes
    const organisations = [...new Set(actors.map(a => a.organisation))];
    const orgNodes: NetworkNode[] = organisations.map((org, i) => {
      const angle = (i / organisations.length) * 2 * Math.PI;
      return {
        id: `org-${org}`,
        type: 'organisation',
        label: org.length > 25 ? org.substring(0, 22) + '...' : org,
        x: centerX + Math.cos(angle) * 50,
        y: centerY + Math.sin(angle) * 50,
        vx: 0,
        vy: 0,
        radius: 20,
      };
    });

    // Create links between actors and organisations
    const orgLinks: NetworkLink[] = actors.map(actor => ({
      source: actor.id,
      target: `org-${actor.organisation}`,
      type: 'works_at',
    }));

    // Create finding nodes (limited to avoid clutter)
    const topFindings = new Map<string, number>();
    actors.forEach(actor => {
      actor.relatedFindings?.forEach(f => {
        topFindings.set(f, (topFindings.get(f) || 0) + 1);
      });
    });

    // Only show findings connected to 2+ actors
    const sharedFindings = [...topFindings.entries()]
      .filter(([_, count]) => count >= 2)
      .slice(0, 15)
      .map(([id]) => id);

    const findingNodes: NetworkNode[] = sharedFindings.map((f, i) => {
      const angle = (i / sharedFindings.length) * 2 * Math.PI + Math.PI / 4;
      const radius = 280 + Math.random() * 40;
      return {
        id: f,
        type: 'finding',
        label: f,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: 16,
      };
    });

    // Create links to findings
    const findingLinks: NetworkLink[] = [];
    actors.forEach(actor => {
      actor.relatedFindings?.forEach(f => {
        if (sharedFindings.includes(f)) {
          findingLinks.push({
            source: actor.id,
            target: f,
            type: 'related_finding',
          });
        }
      });
    });

    setNodes([...actorNodes, ...orgNodes, ...findingNodes]);
    setLinks([...orgLinks, ...findingLinks]);
  }, [actors, dimensions]);

  // Force simulation
  useEffect(() => {
    if (!isSimulating || nodes.length === 0) return;

    const simulate = () => {
      setNodes(prevNodes => {
        const newNodes = prevNodes.map(node => ({ ...node }));
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;

        // Apply forces
        newNodes.forEach((node, i) => {
          // Center gravity
          const dx = centerX - node.x;
          const dy = centerY - node.y;
          node.vx += dx * 0.001;
          node.vy += dy * 0.001;

          // Repulsion between nodes
          newNodes.forEach((other, j) => {
            if (i !== j) {
              const diffX = node.x - other.x;
              const diffY = node.y - other.y;
              const dist = Math.sqrt(diffX * diffX + diffY * diffY) || 1;
              const minDist = node.radius + other.radius + 30;
              if (dist < minDist) {
                const force = (minDist - dist) / dist * 0.5;
                node.vx += diffX * force;
                node.vy += diffY * force;
              }
            }
          });
        });

        // Apply link attraction
        links.forEach(link => {
          const source = newNodes.find(n => n.id === link.source);
          const target = newNodes.find(n => n.id === link.target);
          if (source && target) {
            const dx = target.x - source.x;
            const dy = target.y - source.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const idealDist = link.type === 'works_at' ? 100 : 150;
            const force = (dist - idealDist) * 0.01;
            source.vx += dx / dist * force;
            source.vy += dy / dist * force;
            target.vx -= dx / dist * force;
            target.vy -= dy / dist * force;
          }
        });

        // Update positions with velocity damping
        newNodes.forEach(node => {
          node.vx *= 0.9;
          node.vy *= 0.9;
          node.x += node.vx;
          node.y += node.vy;

          // Boundary constraints
          const margin = node.radius + 10;
          node.x = Math.max(margin, Math.min(dimensions.width - margin, node.x));
          node.y = Math.max(margin, Math.min(dimensions.height - margin, node.y));
        });

        return newNodes;
      });

      animationRef.current = requestAnimationFrame(simulate);
    };

    animationRef.current = requestAnimationFrame(simulate);

    // Stop simulation after 5 seconds
    const timeout = setTimeout(() => {
      setIsSimulating(false);
    }, 5000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timeout);
    };
  }, [isSimulating, nodes.length, links, dimensions]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: Math.min(rect.width * 0.75, 600),
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Get connected nodes
  const getConnectedNodes = useCallback((nodeId: string) => {
    const connected = new Set<string>();
    links.forEach(link => {
      if (link.source === nodeId) connected.add(link.target);
      if (link.target === nodeId) connected.add(link.source);
    });
    return connected;
  }, [links]);

  const activeNode = selectedNode || hoveredNode;
  const connectedNodes = activeNode ? getConnectedNodes(activeNode) : new Set<string>();

  // Navigate to actor or finding page
  const handleNodeClick = (node: NetworkNode) => {
    if (node.type === 'actor') {
      setSelectedNode(selectedNode === node.id ? null : node.id);
    } else if (node.type === 'finding') {
      window.location.href = `${basePath}/findings/${node.id.toLowerCase()}`;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full rounded-2xl bg-navy-800/30 border border-navy-700/50 overflow-hidden">
      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="text-navy-300">Defendant</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-navy-300">Favourable</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="text-navy-300">Organisation</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-navy-900/80 backdrop-blur">
          <span className="w-3 h-3 rounded-full bg-[#d4af37]"></span>
          <span className="text-navy-300">Finding</span>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setIsSimulating(true)}
          className="px-3 py-1.5 text-xs font-medium text-navy-300 bg-navy-900/80 backdrop-blur rounded-lg hover:bg-navy-800 transition-colors"
        >
          {isSimulating ? 'Simulating...' : 'Restart'}
        </button>
        {selectedNode && (
          <button
            onClick={() => setSelectedNode(null)}
            className="px-3 py-1.5 text-xs font-medium text-gold-400 bg-navy-900/80 backdrop-blur rounded-lg hover:bg-navy-800 transition-colors"
          >
            Clear Selection
          </button>
        )}
      </div>

      {/* SVG Graph */}
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        className="cursor-move"
      >
        {/* Links */}
        <g className="links">
          {links.map((link, i) => {
            const source = nodes.find(n => n.id === link.source);
            const target = nodes.find(n => n.id === link.target);
            if (!source || !target) return null;

            const isHighlighted = activeNode && (link.source === activeNode || link.target === activeNode);
            const opacity = activeNode ? (isHighlighted ? 0.8 : 0.1) : 0.3;

            return (
              <line
                key={`link-${i}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={link.type === 'works_at' ? '#6366f1' : '#d4af37'}
                strokeWidth={isHighlighted ? 2 : 1}
                strokeOpacity={opacity}
                strokeDasharray={link.type === 'related_finding' ? '4,4' : undefined}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g className="nodes">
          {nodes.map(node => {
            const isActive = node.id === activeNode;
            const isConnected = connectedNodes.has(node.id);
            const opacity = activeNode ? (isActive || isConnected ? 1 : 0.3) : 1;
            const scale = isActive ? 1.2 : 1;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                style={{
                  opacity,
                  transition: 'opacity 0.3s',
                  cursor: 'pointer',
                }}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Glow effect for critical nodes */}
                {node.critical && (
                  <circle
                    r={node.radius + 8}
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth={2}
                    strokeOpacity={0.4}
                    className="animate-pulse"
                  />
                )}

                {/* Main circle */}
                <circle
                  r={node.radius * scale}
                  fill={getNodeColor(node)}
                  stroke={isActive ? '#d4af37' : '#1a2744'}
                  strokeWidth={isActive ? 3 : 2}
                  style={{ transition: 'r 0.3s, stroke 0.3s' }}
                />

                {/* Node label */}
                <text
                  textAnchor="middle"
                  dy={node.radius + 14}
                  fill="#c8d4e8"
                  fontSize={10}
                  fontFamily="Inter, sans-serif"
                  style={{
                    pointerEvents: 'none',
                    opacity: isActive || isConnected ? 1 : 0.7,
                  }}
                >
                  {node.label.length > 15 ? node.label.substring(0, 12) + '...' : node.label}
                </text>

                {/* Type icon for organisations */}
                {node.type === 'organisation' && (
                  <text
                    textAnchor="middle"
                    dy={4}
                    fill="white"
                    fontSize={12}
                    style={{ pointerEvents: 'none' }}
                  >
                    🏥
                  </text>
                )}

                {/* Finding ID */}
                {node.type === 'finding' && (
                  <text
                    textAnchor="middle"
                    dy={4}
                    fill="#0a0f1a"
                    fontSize={9}
                    fontWeight="bold"
                    fontFamily="JetBrains Mono, monospace"
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.label}
                  </text>
                )}

                {/* Actor initials */}
                {node.type === 'actor' && (
                  <text
                    textAnchor="middle"
                    dy={4}
                    fill="white"
                    fontSize={11}
                    fontWeight="600"
                    fontFamily="Inter, sans-serif"
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.label.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Selected Actor Details Panel */}
      {selectedNode && (
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-900/95 backdrop-blur-xl rounded-xl border border-navy-700/50">
          {(() => {
            const actor = actors.find(a => a.id === selectedNode);
            if (!actor) return null;

            return (
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  actor.classification === 'DEFENDANT' ? 'bg-red-500/20 text-red-400' :
                  actor.classification === 'WITNESS_FAVOURABLE' || actor.classification === 'CURRENT_CARE' ? 'bg-green-500/20 text-green-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  <span className="text-lg font-semibold">
                    {actor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold">{actor.name}</h4>
                  <p className="text-sm text-navy-400">{actor.role}</p>
                  <p className="text-xs text-navy-500 mt-1">{actor.organisation}</p>
                  {actor.relatedFindings && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {actor.relatedFindings.slice(0, 6).map(f => (
                        <a
                          key={f}
                          href={`${basePath}/findings/${f.toLowerCase()}`}
                          className="text-xs font-mono px-1.5 py-0.5 rounded bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 transition-colors"
                        >
                          {f}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
