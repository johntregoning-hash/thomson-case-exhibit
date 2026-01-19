/**
 * ScrollObserver Component
 *
 * React component that uses Intersection Observer to trigger
 * scroll-based animations for the timeline scrollytelling experience.
 *
 * Features:
 * - Tracks which timeline events are in view
 * - Updates a floating date ticker as user scrolls
 * - Triggers slide-in animations for evidence cards
 * - Highlights the current phase in the spine
 */

import { useEffect, useState, useCallback, useRef } from 'react';

interface TimelineEvent {
  id: string;
  date: string;
  phase: number;
  isAnchor?: boolean;
}

interface ScrollObserverProps {
  events: TimelineEvent[];
  onEventInView?: (eventId: string, date: string) => void;
}

export default function ScrollObserver({ events, onEventInView }: ScrollObserverProps) {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [currentPhase, setCurrentPhase] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer for timeline events
  useEffect(() => {
    // Create observer with options for when elements enter viewport
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const eventId = element.dataset.eventId;
          const eventDate = element.dataset.eventDate || '';
          const eventPhase = parseInt(element.dataset.eventPhase || '1', 10);

          if (entry.isIntersecting) {
            // Add animation class when entering view
            element.classList.add('timeline-event-visible');
            element.classList.remove('timeline-event-hidden');

            // Update the current date ticker
            setCurrentDate(eventDate);
            setCurrentPhase(eventPhase);
            setIsVisible(true);

            // Callback for parent component
            if (onEventInView && eventId) {
              onEventInView(eventId, eventDate);
            }

            // Highlight corresponding spine dot
            const spineDot = document.querySelector(`[data-spine-event="${eventId}"]`);
            if (spineDot) {
              spineDot.classList.add('spine-dot-active');
            }
          } else {
            // Check if element is above or below viewport
            const rect = entry.boundingClientRect;
            if (rect.top > 0) {
              // Element is below viewport - reset animation
              element.classList.add('timeline-event-hidden');
              element.classList.remove('timeline-event-visible');
            }

            // Remove spine dot highlight
            const spineDot = document.querySelector(`[data-spine-event="${eventId}"]`);
            if (spineDot) {
              spineDot.classList.remove('spine-dot-active');
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '-20% 0px -30% 0px', // Trigger when element is in middle 50% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observe all timeline event elements
    const timelineEvents = document.querySelectorAll('[data-event-id]');
    timelineEvents.forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [events, onEventInView]);

  // Set up scroll listener for date ticker visibility
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('scrollytelling-timeline');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Floating Date Ticker - Fixed position during scroll */}
      <div
        className={`fixed left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="bg-[#0d1526]/90 backdrop-blur-xl border border-[#1a2744]/50 rounded-2xl p-4 shadow-lg">
          {/* Phase indicator */}
          <div className="text-xs text-[#5a6b8a] uppercase tracking-wider mb-1">
            Phase {currentPhase}
          </div>

          {/* Current date */}
          <div className="text-2xl font-display font-bold text-white">
            {currentDate || '—'}
          </div>

          {/* Progress dots */}
          <div className="flex gap-1 mt-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((phase) => (
              <div
                key={phase}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  phase === currentPhase
                    ? 'bg-[#d4af37] scale-125'
                    : phase < currentPhase
                    ? 'bg-[#10b981]'
                    : 'bg-[#1a2744]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed right-0 top-16 bottom-0 w-1 z-40 bg-[#0d1526]">
        <div
          id="scroll-progress-bar"
          className="w-full bg-gradient-to-b from-[#d4af37] to-[#10b981] transition-all duration-100"
          style={{ height: '0%' }}
        />
      </div>
    </>
  );
}

// Export a hook for scroll progress tracking
export function useScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById('scrollytelling-timeline');
      const progressBar = document.getElementById('scroll-progress-bar');

      if (timeline && progressBar) {
        const rect = timeline.getBoundingClientRect();
        const timelineHeight = timeline.scrollHeight;
        const windowHeight = window.innerHeight;

        // Calculate how much of the timeline has been scrolled
        const scrolled = Math.max(0, -rect.top);
        const scrollableHeight = timelineHeight - windowHeight;
        const progress = Math.min(100, (scrolled / scrollableHeight) * 100);

        progressBar.style.height = `${progress}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
