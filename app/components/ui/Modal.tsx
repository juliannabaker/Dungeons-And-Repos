'use client';

import { ReactNode, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
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

export interface ModalRef {
  scrollToTop: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({
  isOpen,
  onClose,
  children,
  title,
  subtitle,
  showCloseButton = true,
  maxWidth = '6xl',
  className = '',
}, ref) => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      scrollableRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    },
  }));
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
        className={`relative w-full ${maxWidthClasses[maxWidth]} max-h-[90vh] rounded-sm border border-purple-500/20 bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-indigo-950/95 shadow-2xl animate-scale-in backdrop-blur-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner elements - Vogue style (fixed to modal container) */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/30 pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-500/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/30 pointer-events-none z-10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 pointer-events-none z-10"></div>

        {/* Scrollable content area */}
        <div ref={scrollableRef} className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
          {/* Optional Header */}
          {(title || subtitle) && (
            <div className="text-center mb-10">
              {title && (
                <div className="inline-block mb-4">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mb-4"></div>
                  <h2 className="text-5xl md:text-6xl font-light tracking-[0.15em] mb-3 text-purple-50/90 uppercase">
                    {title}
                  </h2>
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mt-4"></div>
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
        </div>

        {/* Elegant Close Button */}
        {showCloseButton && (
          <Button
            variant="close"
            onClick={onClose}
            className="absolute top-6 right-6 z-20"
            aria-label="Close modal"
          >
            ×
          </Button>
        )}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;

