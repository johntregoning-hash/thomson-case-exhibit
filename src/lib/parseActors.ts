export interface Actor {
  id: string;
  name: string;
  role: string;
  organisation: string;
  category: 'gp' | 'specialist' | 'manager' | 'nursing' | 'other';
  conduct: 'supportive' | 'neutral' | 'problematic' | 'critical';
  conductSummary: string;
  relatedFindings: string[];
  keyDates?: string[];
}

// For static site, actors data is hardcoded in the actors page
// This module provides types and utility functions

export function getActorsStats() {
  return {
    total: 10,
    supportive: 5,
    problematic: 5,
    gps: 4,
    specialists: 5
  };
}

export function getConductColor(conduct: string): string {
  switch (conduct) {
    case 'supportive': return 'vindication';
    case 'problematic': return 'discrepancy';
    case 'critical': return 'breach';
    default: return 'default';
  }
}

export function getConductLabel(conduct: string): string {
  switch (conduct) {
    case 'supportive': return 'Supportive';
    case 'problematic': return 'Problematic';
    case 'critical': return 'Critical Conduct';
    default: return 'Neutral';
  }
}
