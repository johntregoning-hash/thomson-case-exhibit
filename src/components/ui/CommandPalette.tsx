/**
 * CommandPalette Component
 *
 * A Cmd+K search interface for instant navigation across the evidence repository.
 * Uses the cmdk library for fuzzy search and keyboard navigation.
 *
 * Features:
 * - Fuzzy search across Findings, Actors, Pages
 * - Keyboard navigation (arrows, Enter, Esc)
 * - Glassmorphism styling matching V2 design
 * - Category-based grouping with icons
 */

import { Command } from 'cmdk';
import { useState, useEffect, useCallback } from 'react';

interface Finding {
  id: string;
  title: string;
  category: string;
  evidenceStatus?: string;
}

interface Actor {
  id: string;
  name: string;
  role: string;
  organisation?: string;
}

interface CommandPaletteProps {
  findings: Finding[];
  actors: Actor[];
  basePath: string;
}

// Category icons and colors
const categoryConfig: Record<string, { color: string; label: string }> = {
  VINDICATION: { color: 'text-green-400', label: 'Vindication' },
  BREACH: { color: 'text-red-400', label: 'Breach' },
  DISCREPANCY: { color: 'text-amber-400', label: 'Discrepancy' },
  FABRICATION: { color: 'text-red-500', label: 'Fabrication' },
  WITNESS: { color: 'text-blue-400', label: 'Witness' },
  CAUSATION: { color: 'text-blue-500', label: 'Causation' },
  QUANTUM: { color: 'text-purple-400', label: 'Quantum' },
  PROCEDURAL: { color: 'text-slate-400', label: 'Procedural' },
  STRATEGIC: { color: 'text-indigo-400', label: 'Strategic' },
  NEUROLOGICAL: { color: 'text-cyan-400', label: 'Neurological' },
  MEDICATION: { color: 'text-orange-400', label: 'Medication' },
  'FND/SOMATOFORM': { color: 'text-pink-400', label: 'FND/Somatoform' },
};

// Page navigation items
const pages = [
  { href: '/findings', label: 'All Findings', count: '359+', icon: 'file' },
  { href: '/vindication', label: 'Vindication Evidence', count: '27+', icon: 'check' },
  { href: '/timeline', label: 'Case Timeline', count: '8 phases', icon: 'clock' },
  { href: '/evidence', label: 'Evidence Hierarchy', count: '7 tiers', icon: 'layers' },
  { href: '/actors', label: 'Actors Registry', count: '10+', icon: 'users' },
  { href: '/essays', label: 'Essays', count: '6+', icon: 'book' },
  { href: '/documents', label: 'Documents', count: '', icon: 'folder' },
];

export default function CommandPalette({ findings, actors, basePath }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Listen for open-command-palette event
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-command-palette', handleOpen);

    return () => {
      window.removeEventListener('open-command-palette', handleOpen);
    };
  }, []);

  // Keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Navigate to a path
  const navigate = useCallback((path: string) => {
    window.location.href = `${basePath}${path}`;
    setOpen(false);
    setSearch('');
  }, [basePath]);

  // Filter findings based on search
  const filteredFindings = findings.filter((f) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      f.id.toLowerCase().includes(searchLower) ||
      f.title.toLowerCase().includes(searchLower) ||
      f.category.toLowerCase().includes(searchLower)
    );
  }).slice(0, 8);

  // Filter actors based on search
  const filteredActors = actors.filter((a) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      a.name.toLowerCase().includes(searchLower) ||
      a.role.toLowerCase().includes(searchLower) ||
      (a.organisation?.toLowerCase().includes(searchLower) ?? false)
    );
  }).slice(0, 5);

  // Get icon component
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'file':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'check':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'layers':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'book':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'folder':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0a0f1a]/80 backdrop-blur-sm"
        onClick={() => {
          setOpen(false);
          setSearch('');
        }}
      />

      {/* Dialog */}
      <div className="fixed left-1/2 top-[20vh] -translate-x-1/2 w-full max-w-xl">
        <Command
          className="bg-[#0d1526]/95 backdrop-blur-2xl border border-[#1a2744]/80 rounded-2xl shadow-2xl overflow-hidden"
          loop
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-[#1a2744]/50">
            <svg className="w-5 h-5 text-[#5a6b8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Command.Input
              placeholder="Search findings, actors, pages..."
              className="flex-1 bg-transparent text-white placeholder:text-[#5a6b8a] focus:outline-none text-lg"
              value={search}
              onValueChange={setSearch}
            />
            <kbd className="px-2 py-1 text-xs font-mono bg-[#1a2744] border border-[#2a3a5c] rounded text-[#7a8ba8]">
              esc
            </kbd>
          </div>

          {/* Results List */}
          <Command.List className="max-h-[60vh] overflow-auto p-2">
            <Command.Empty className="py-8 text-center text-[#5a6b8a]">
              No results found.
            </Command.Empty>

            {/* Pages Group */}
            <Command.Group heading="Pages" className="mb-2">
              <div className="px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider">
                Pages
              </div>
              {pages.map((page) => (
                <Command.Item
                  key={page.href}
                  value={`page ${page.label}`}
                  onSelect={() => navigate(page.href)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer
                             data-[selected=true]:bg-[#1a2744]/60 transition-colors"
                >
                  <span className={page.href === '/vindication' ? 'text-green-400' : 'text-[#d4af37]'}>
                    {getIcon(page.icon)}
                  </span>
                  <span className="flex-1">{page.label}</span>
                  {page.count && (
                    <span className="text-xs text-[#5a6b8a]">{page.count}</span>
                  )}
                </Command.Item>
              ))}
            </Command.Group>

            {/* Findings Group */}
            {filteredFindings.length > 0 && (
              <Command.Group heading="Findings" className="mb-2">
                <div className="px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider">
                  Findings
                </div>
                {filteredFindings.map((finding) => {
                  const config = categoryConfig[finding.category] || { color: 'text-[#7a8ba8]', label: finding.category };
                  return (
                    <Command.Item
                      key={finding.id}
                      value={`finding ${finding.id} ${finding.title} ${finding.category}`}
                      onSelect={() => navigate(`/findings/${finding.id.toLowerCase()}`)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer
                                 data-[selected=true]:bg-[#1a2744]/60 transition-colors"
                    >
                      <span className="text-xs font-mono text-[#5a6b8a] w-12">{finding.id}</span>
                      <span className="flex-1 truncate">{finding.title}</span>
                      <span className={`text-xs ${config.color}`}>{config.label}</span>
                    </Command.Item>
                  );
                })}
              </Command.Group>
            )}

            {/* Actors Group */}
            {filteredActors.length > 0 && (
              <Command.Group heading="Actors" className="mb-2">
                <div className="px-2 py-1.5 text-xs font-medium text-[#5a6b8a] uppercase tracking-wider">
                  Actors
                </div>
                {filteredActors.map((actor) => (
                  <Command.Item
                    key={actor.id}
                    value={`actor ${actor.name} ${actor.role} ${actor.organisation || ''}`}
                    onSelect={() => navigate(`/actors#${actor.id.toLowerCase()}`)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#c8d4e8] cursor-pointer
                               data-[selected=true]:bg-[#1a2744]/60 transition-colors"
                  >
                    <span className="text-xs font-mono text-[#5a6b8a] w-12">{actor.id}</span>
                    <span className="flex-1">
                      <span className="font-medium">{actor.name}</span>
                      <span className="text-[#5a6b8a] ml-2">{actor.role}</span>
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-[#1a2744]/50 flex items-center gap-6 text-xs text-[#5a6b8a]">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded">↓</kbd>
              <span className="ml-1">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded">↵</kbd>
              <span className="ml-1">Select</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-[#1a2744] border border-[#2a3a5c] rounded">esc</kbd>
              <span className="ml-1">Close</span>
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}
