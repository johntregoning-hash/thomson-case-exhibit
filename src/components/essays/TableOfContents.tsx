/**
 * TableOfContents Component - V3 Phase 2
 * 
 * Extracts headings from the essay content and creates
 * a navigable, scroll-synced table of contents.
 */

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings on mount
  useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3, h4');
    const items: TOCItem[] = [];

    elements.forEach((el, index) => {
      // Generate ID if not present
      if (!el.id) {
        el.id = `heading-${index}`;
      }
      
      items.push({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1))
      });
    });

    setHeadings(items);
    
    // Set initial active
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, []);

  // Track scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="space-y-1" aria-label="Table of contents">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
        Contents
      </h3>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full text-left py-1.5 px-2 rounded transition-all duration-200
                ${activeId === heading.id 
                  ? 'bg-gold-500/10 text-gold-400 border-l-2 border-gold-500' 
                  : 'text-navy-400 hover:text-white hover:bg-navy-800/50 border-l-2 border-transparent'
                }
                ${heading.level === 2 ? 'font-medium' : 'text-xs'}
              `}
            >
              <span className="line-clamp-2">{heading.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
