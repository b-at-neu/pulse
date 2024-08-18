import { ReactElement } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Bar({ data, link }: { data: [data: string | ReactElement, width: string][]; link: string }) {
  return (
    <Link
      className="flex flex-row items-center gap-1 bg-muted hover:bg-muted/70 w-full h-8 border rounded-lg px-3"
      href={link}
    >
      {data.map(([data, width], i) => (
        <div key={i} className={cn(width, 'truncate')}>
          {data}
        </div>
      ))}
    </Link>
  );
}
