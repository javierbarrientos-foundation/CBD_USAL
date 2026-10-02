import React from 'react';

interface MolecularPatternProps {
  className?: string;
  variant?: 'nodes' | 'waveform' | 'helix' | 'matrix';
}

export const MolecularPattern: React.FC<MolecularPatternProps> = ({
  className = '',
  variant = 'nodes'
}) => {
  if (variant === 'waveform') {
    return (
      <svg
        viewBox="0 0 400 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-sm h-8 opacity-40 ${className}`}
        aria-hidden="true"
      >
        <path
          d="M0 30 Q 25 10, 50 30 T 100 30 T 150 30 T 175 10 T 185 50 T 195 5 T 205 55 T 215 30 T 265 30 T 315 30 T 365 30 L 400 30"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="4 2"
        />
        <circle cx="195" cy="5" r="2.5" fill="currentColor" />
        <circle cx="205" cy="55" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'helix') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-24 h-24 opacity-35 ${className}`}
        aria-hidden="true"
      >
        {/* DNA-like structural rungs */}
        <line x1="20" y1="20" x2="100" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="20" y1="50" x2="100" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        <line x1="20" y1="80" x2="100" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
        {/* Curved strands */}
        <path d="M20 15 Q 60 60, 20 105" stroke="currentColor" strokeWidth="1.5" />
        <path d="M100 15 Q 60 60, 100 105" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="15" r="3" fill="currentColor" />
        <circle cx="100" cy="40" r="2.5" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <circle cx="20" cy="80" r="2.5" fill="currentColor" />
        <circle cx="100" cy="105" r="3" fill="currentColor" />
      </svg>
    );
  }

  // Default 'nodes' molecular diagram
  return (
    <svg
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-40 ${className}`}
      aria-hidden="true"
    >
      {/* Node connecting lines */}
      <line x1="30" y1="50" x2="110" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="110" y1="25" x2="190" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="190" y1="50" x2="250" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="110" y1="25" x2="140" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="190" y1="50" x2="140" y2="80" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="50" x2="80" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

      {/* Primary Nodes */}
      <circle cx="30" cy="50" r="4.5" fill="currentColor" />
      <circle cx="110" cy="25" r="5.5" fill="currentColor" />
      <circle cx="190" cy="50" r="4.5" fill="currentColor" />
      <circle cx="250" cy="25" r="3.5" fill="currentColor" />
      <circle cx="140" cy="80" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="140" cy="80" r="2" fill="currentColor" />
      <circle cx="80" cy="85" r="3" fill="currentColor" />
    </svg>
  );
};
