/**
 * ReadingProgress Component - V3 Enhancement
 *
 * Horizontal progress bar at the top of the page that fills
 * as the user scrolls through the essay content.
 *
 * Features:
 * - Fixed position at top
 * - Smooth animation
 * - Gold accent color
 */

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article') || document.body;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      
      const currentProgress = Math.min(100, (scrollTop / documentHeight) * 100);
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-navy-900/50">
      <div 
        className="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
