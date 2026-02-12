'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.1 to 1.0, where 1.0 is no parallax
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Only apply parallax when element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * (1 - speed);
        ref.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`transition-transform duration-100 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
