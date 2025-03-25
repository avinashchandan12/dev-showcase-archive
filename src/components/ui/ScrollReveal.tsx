
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  distance = 20,
  once = true,
  threshold = 0.1
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let startTransform = '';
    switch (direction) {
      case 'up':
        startTransform = `translateY(${distance}px)`;
        break;
      case 'down':
        startTransform = `translateY(-${distance}px)`;
        break;
      case 'left':
        startTransform = `translateX(${distance}px)`;
        break;
      case 'right':
        startTransform = `translateX(-${distance}px)`;
        break;
      case 'none':
        startTransform = 'none';
        break;
    }
    
    element.style.opacity = '0';
    element.style.transform = startTransform;
    element.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
          }, 100);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          element.style.opacity = '0';
          element.style.transform = startTransform;
        }
      });
    }, {
      threshold: threshold
    });
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [delay, direction, distance, once, threshold]);
  
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
