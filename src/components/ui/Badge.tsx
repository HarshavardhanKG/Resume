import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

type BadgeVariant = 'default' | 'accent' | 'muted' | 'success';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  default: 'bg-bg-2 text-ink-1 border-line',
  accent: 'bg-accent/10 text-accent border-accent/30',
  muted: 'bg-transparent text-ink-2 border-line',
  success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md',
        'font-mono text-[11px] font-medium tracking-wider uppercase',
        'border',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
