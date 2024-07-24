import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

export function NavbarLink({ text, href, icon }: { text: string; href: string; icon: ReactElement }) {
  const path = usePathname();

  return (
    <Link className={cn('flex gap-5 justify-center rounded w-full p-2 hover:bg-accent')} href={href}>
      {icon}
      {text}
    </Link>
  );
}
