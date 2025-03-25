
import React from 'react';

interface WebDevSVGProps {
  className?: string;
}

const WebDevSVG = ({ className }: WebDevSVGProps) => {
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
      <rect x="30" y="40" width="140" height="100" rx="5" />
      <rect x="30" y="40" width="140" height="20" rx="5" />
      <circle cx="45" cy="50" r="5" />
      <circle cx="65" cy="50" r="5" />
      <circle cx="85" cy="50" r="5" />
      <rect x="50" y="80" width="100" height="40" rx="2" />
      <path d="M40 150 L160 150 Q160 170 140 170 L60 170 Q40 170 40 150" />
    </svg>
  );
};

export default WebDevSVG;
