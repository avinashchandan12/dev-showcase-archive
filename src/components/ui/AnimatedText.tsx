
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const AnimatedText = ({ 
  text, 
  className = "", 
  once = true,
  delay = 0,
  speed = 0.05,
  tag = 'span'
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const letters = Array.from(text);
    const container = containerRef.current;
    if (!container) return;
    
    container.innerHTML = '';
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('inline-block', 'overflow-hidden');
    
    letters.forEach((letter, index) => {
      const span = document.createElement(tag);
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(100%)';
      span.style.opacity = '0';
      span.style.transition = `transform 0.5s ease ${delay + index * speed}s, opacity 0.5s ease ${delay + index * speed}s`;
      
      if (letter === ' ') {
        span.style.marginRight = '0.25em';
      }
      
      wrapper.appendChild(span);
    });
    
    container.appendChild(wrapper);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            Array.from(wrapper.children).forEach(span => {
              (span as HTMLElement).style.transform = 'translateY(0)';
              (span as HTMLElement).style.opacity = '1';
            });
          }, 100);
          
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          Array.from(wrapper.children).forEach(span => {
            (span as HTMLElement).style.transform = 'translateY(100%)';
            (span as HTMLElement).style.opacity = '0';
          });
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(container);
    
    return () => {
      observer.disconnect();
    };
  }, [text, once, delay, speed, tag]);
  
  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      {text}
    </div>
  );
};

export default AnimatedText;
