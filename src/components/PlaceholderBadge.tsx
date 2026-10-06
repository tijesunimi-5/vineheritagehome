'use client';

import React from 'react';

interface PlaceholderBadgeProps {
  text: string;
  className?: string;
  tooltip?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  text,
  className = "",
  tooltip = "Factual placeholder awaiting official VHH verification"
}) => {
  return (
    <span
      title={tooltip}
      className={`vhh-placeholder-tag inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-50 text-amber-900 border border-amber-300/80 shadow-sm cursor-help transition-all hover:bg-amber-100 ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
      {text}
    </span>
  );
};
