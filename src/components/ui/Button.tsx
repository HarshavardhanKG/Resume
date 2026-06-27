'use client';

import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg-0 hover:bg-white hover:shadow-[0_0_24px_-4px_rgba(0,217,255,0.6)]',
  ghost:
    'bg-transparent text-ink-0 hover:bg-bg-1 border border-line hover:border-accent/40',
  outline:
    'bg-transparent text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', children, ...props },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-mono font-medium tracking-wide',
        'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-0',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});
