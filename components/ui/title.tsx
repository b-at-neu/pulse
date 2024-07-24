import { cn } from '@/lib/utils';

interface TitleProps extends React.HTMLAttributes<HTMLElement> {}

export function Title({ children, className }: TitleProps) {
  return <h1 className={cn('mb-5 text-3xl md:text-4xl font-bold', className)}>{children}</h1>;
}
