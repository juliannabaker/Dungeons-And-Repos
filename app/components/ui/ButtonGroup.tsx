'use client';

import { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  direction?: 'row' | 'col';
}

export default function ButtonGroup({
  children,
  className = '',
  align = 'right',
  direction = 'row',
}: ButtonGroupProps) {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  return (
    <div
      className={`flex ${directionClasses[direction]} gap-4 ${alignClasses[align]} ${className}`}
    >
      {children}
    </div>
  );
}

