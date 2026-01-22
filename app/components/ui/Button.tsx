'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'close';
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-light transition-all duration-300';
  
  const variantClasses = {
    primary: 'px-8 md:px-10 py-3 md:py-4 rounded-sm border border-amber-500/40 bg-gradient-to-r from-amber-600/20 to-amber-500/20 backdrop-blur-sm text-amber-200/90 hover:from-amber-600/30 hover:to-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 tracking-wider uppercase text-xs',
    secondary: 'px-8 md:px-10 py-3 md:py-4 rounded-sm border border-gray-500/30 bg-transparent text-gray-400/80 hover:bg-gray-500/10 hover:border-gray-500/50 hover:text-gray-300/90 tracking-wider uppercase text-xs',
    close: 'w-8 h-8 border border-amber-500/30 rounded-sm bg-transparent text-amber-200/70 hover:text-amber-200 hover:bg-amber-500/10 hover:border-amber-500/50 text-xl flex items-center justify-center',
  };

  const disabledClasses = props.disabled
    ? 'opacity-30 cursor-not-allowed'
    : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

