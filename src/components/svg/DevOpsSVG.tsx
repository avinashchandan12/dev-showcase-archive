
import React from 'react';

interface DevOpsSVGProps {
  className?: string;
}

const DevOpsSVG = ({ className }: DevOpsSVGProps) => {
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
      <circle cx="100" cy="100" r="60" />
      <path d="M100 40 A60 60 0 0 1 160 100" />
      <path d="M160 100 A60 60 0 0 1 100 160" />
      <path d="M100 160 A60 60 0 0 1 40 100" />
      <path d="M40 100 A60 60 0 0 1 100 40" />
      <circle cx="100" cy="40" r="10" />
      <circle cx="160" cy="100" r="10" />
      <circle cx="100" cy="160" r="10" />
      <circle cx="40" cy="100" r="10" />
    </svg>
  );
};

export default DevOpsSVG;
