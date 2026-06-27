import { cn } from '@/lib/utils';
import { forwardRef, type HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glow?: boolean;
  as?: 'div' | 'article' | 'section';
};

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, glow = false, as: Tag = 'div', children, ...props },
  ref,
) {
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(
        'relative rounded-xl border border-line bg-bg-1/50 backdrop-blur-sm p-6',
        'transition-all duration-300 hover:border-lineStrong',
        glow && 'glow-ring hover:bg-bg-1',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
});
