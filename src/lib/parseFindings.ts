export interface Finding {
  id: string;
  title: string;
  category: string;
  summary: string;
  evidenceStatus: string;
  workflowStatus: string;
  evidenceRefs: string;
  legalSignificance: string;
  relatedEntries: string[];
  followUpActions: string;
  lastUpdated: string;
  dateFound?: string;
  source?: string;
  staff?: string;
}

export type FindingCategory =
  | 'DISCREPANCY'
  | 'FABRICATION'
  | 'WITNESS'
  | 'VINDICATION'
  | 'BREACH'
  | 'CAUSATION'
  | 'QUANTUM'
  | 'PROCEDURAL'
  | 'STRATEGIC'
  | 'NEUROLOGICAL'
  | 'MEDICATION'
  | 'FND/SOMATOFORM'
  | 'UNKNOWN';

// For static site, data is hardcoded in the page files
// This module provides types and utility functions

export function getFindingsStats() {
  return {
    total: 200,
    byCategory: {
      VINDICATION: 22,
      BREACH: 24,
      WITNESS: 10,
      DISCREPANCY: 4,
      CAUSATION: 6,
      QUANTUM: 3,
      PROCEDURAL: 5,
      STRATEGIC: 4,
      NEUROLOGICAL: 8,
      MEDICATION: 8,
      'FND/SOMATOFORM': 6
    },
    verified: 180,
    vindication: 22
  };
}

export function getCategoryVariant(category: string): string {
  const categoryMap: Record<string, string> = {
    'VINDICATION': 'vindication',
    'BREACH': 'breach',
    'DISCREPANCY': 'discrepancy',
    'CAUSATION': 'causation',
    'QUANTUM': 'quantum',
    'PROCEDURAL': 'procedural',
    'STRATEGIC': 'strategic',
    'WITNESS': 'witness',
    'FABRICATION': 'fabrication',
    'NEUROLOGICAL': 'causation',
    'MEDICATION': 'breach',
    'FND/SOMATOFORM': 'breach'
  };
  return categoryMap[category] || 'default';
}
