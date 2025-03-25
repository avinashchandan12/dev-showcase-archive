
import React from 'react';

interface CloudSVGProps {
  className?: string;
}

const CloudSVG = ({ className }: CloudSVGProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 100 Q40 100 40 80 Q40 60 60 60 Q65 40 90 40 Q115 40 120 60 Q140 60 160 80 Q160 100 140 100 Z" />
      <path d="M60 100 L60 120 L140 120 L140 100" />
      <path d="M70 120 L70 140" />
      <path d="M100 120 L100 140" />
      <path d="M130 120 L130 140" />
      <circle cx="70" cy="150" r="10" />
      <circle cx="100" cy="150" r="10" />
      <circle cx="130" cy="150" r="10" />
    </svg>
  );
};

export default CloudSVG;
