import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function NavbarLink({ text, href }: { text: string; href: string }) {
  const path = usePathname();

  return (
    <Button className={cn('rounded')}>
      <Link href={href}>{text}</Link>
    </Button>
  );
}
