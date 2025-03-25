
import React from 'react';

interface BackendSVGProps {
  className?: string;
}

const BackendSVG = ({ className }: BackendSVGProps) => {
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
      <rect x="40" y="40" width="120" height="120" rx="8" />
      <rect x="60" y="70" width="80" height="15" rx="2" />
      <rect x="60" y="95" width="80" height="15" rx="2" />
      <rect x="60" y="120" width="80" height="15" rx="2" />
      <circle cx="100" cy="40" r="5" />
      <path d="M95 145 L105 145" />
    </svg>
  );
};

export default BackendSVG;
