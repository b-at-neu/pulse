import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

export function Bar({ data }: { data: [data: string | ReactElement, width: string][] }) {
  return (
    <div className="flex flex-row items-center gap-1 bg-muted w-full h-8 border rounded-lg px-3">
      {data.map(([data, width], i) => (
        <div key={i} className={cn(width, 'truncate')}>
          {data}
        </div>
      ))}
    </div>
  );
}
