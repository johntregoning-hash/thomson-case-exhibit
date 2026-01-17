export interface TimelinePhase {
  number: number;
  title: string;
  dateRange: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  date: string;
  type: 'truth_spine' | 'gp_entry' | 'critical';
  title: string;
  description: string;
  status?: 'verified' | 'unverified' | 'contradicted' | 'fabricated';
  source?: string;
  findingRef?: string;
}

// For static site, timeline data is hardcoded in the timeline page
// This module provides types and utility functions

export function getTimelineStats() {
  return {
    phases: 8,
    totalEvents: 30,
    verifiedEvents: 25,
    contradictedEvents: 5,
    delayMonths: 11
  };
}
