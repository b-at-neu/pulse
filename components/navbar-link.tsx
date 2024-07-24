import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function NavbarLink({ text, href }: { text: string; href: string }) {
  const path = usePathname();

  return (
    <Link className={cn('rounded w-full text-center p-2 hover:bg-accent')} href={href}>
      {text}
    </Link>
  );
}
