import { ReactElement } from 'react';
import { cn } from '@/lib/utils';

export function Bar({ data }: { data: [data: string | ReactElement, width: string][] }) {
  return (
    <div className="w-full h-8 border rounded-lg bg-muted">
      {data.map(([data, width], i) => (
        <div key={i} className={cn(width, 'h-full align-middle')}>
          {data}
        </div>
      ))}
    </div>
  );
}
