'use client';

import { ReactNode, useEffect } from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showCloseButton?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl';
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  subtitle,
  showCloseButton = true,
  maxWidth = '6xl',
  className = '',
}: ModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '6xl': 'max-w-6xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark mysterious backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"></div>

      {/* Elegant Modal Content - Vogue style */}
      <div
        className={`relative w-full ${maxWidthClasses[maxWidth]} max-h-[90vh] overflow-y-auto rounded-sm border border-amber-500/20 bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-indigo-950/95 shadow-2xl animate-scale-in p-8 md:p-12 backdrop-blur-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner elements - Vogue style */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/30"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-500/30"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/30"></div>

        {/* Optional Header */}
        {(title || subtitle) && (
          <div className="text-center mb-10">
            {title && (
              <div className="inline-block mb-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-4"></div>
                <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] mb-3 text-amber-50/90 uppercase">
                  {title}
                </h2>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4"></div>
              </div>
            )}
            {subtitle && (
              <p className="text-sm font-light text-gray-400/70 tracking-[0.2em] uppercase mt-6">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Modal Content */}
        {children}

        {/* Elegant Close Button */}
        {showCloseButton && (
          <Button
            variant="close"
            onClick={onClose}
            className="absolute top-6 right-6"
            aria-label="Close modal"
          >
            ×
          </Button>
        )}
      </div>
    </div>
  );
}

