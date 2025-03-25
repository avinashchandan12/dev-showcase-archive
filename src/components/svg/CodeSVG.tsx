
import React from 'react';

interface CodeSVGProps {
  className?: string;
}

const CodeSVG = ({ className }: CodeSVGProps) => {
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
      <path d="M70 80.5L50 100l20 19.5M130 80.5L150 100l-20 19.5M90 65l20 70" />
      <rect x="40" y="40" width="120" height="120" rx="10" />
    </svg>
  );
};

export default CodeSVG;
