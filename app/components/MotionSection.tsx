'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade' | 'scale' | 'zoom' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'zoom';
}

/**
 * MotionSection Component - Framer Motion powered scroll animations
 * 
 * Features:
 * - Smooth scroll-triggered animations
 * - Multiple animation directions
 * - Viewport detection with once: true
 * - GPU-accelerated transforms
 * - Mobile-optimized performance
 */
export default function MotionSection({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'slide-up',
  direction
}: MotionSectionProps) {
  
  // Map animation prop to direction for backwards compatibility
  const animationMap: { [key: string]: string } = {
    'slide-up': 'up',
    'slide-down': 'down',
    'slide-left': 'left',
    'slide-right': 'right',
    'fade': 'fade',
    'scale': 'scale',
    'zoom': 'zoom',
    'rotate': 'rotate'
  };
  
  const effectiveDirection = direction || animationMap[animation] || 'up';
  
  // Animation variants based on direction
  const variants = {
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    },
    left: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    zoom: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 }
    },
    rotate: {
      initial: { opacity: 0, scale: 0.9, rotate: -5 },
      animate: { opacity: 1, scale: 1, rotate: 0 }
    }
  };

  const selectedVariant = variants[effectiveDirection as keyof typeof variants] || variants.up;

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.animate}
      viewport={{ once: false, margin: "-50px", amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for multiple child animations
export function MotionStagger({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-100px", amount: 0.05 }}
      variants={{
        hidden: {
          opacity: 1
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function MotionStaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hero parallax effect
export function MotionParallax({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
