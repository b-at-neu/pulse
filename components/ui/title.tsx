import { cn } from '@/lib/utils';

interface TitleProps extends React.HTMLAttributes<HTMLElement> {}

export function Title({ children, className }: TitleProps) {
  return <h1 className={cn('text-3xl md:text-4xl font-extrabold', className)}>{children}</h1>;
}
