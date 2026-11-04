import React from 'react';

interface TelegramIconProps {
  className?: string;
}

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.8 2.2 2.2 9.75c-1.34.52-1.33 1.25-.24 1.58l5.03 1.57 1.92 6.01c.23.66.12.92.8.92.53 0 .76-.24 1.05-.52l2.44-2.37 5.08 3.75c.93.51 1.6.25 1.83-.87l3.33-15.69c.34-1.37-.52-1.99-1.64-1.48ZM8.06 12.55l11.66-7.36c.58-.35 1.11-.16.67.23l-9.62 8.68-.37 3.97-2.34-5.52Z" />
  </svg>
);
