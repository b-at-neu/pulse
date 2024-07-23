import Link from 'next/link';

export function NavbarLink({ text, href }: { text: string; href: string }) {
  return (
    <Link className="h-fit hover:text-slate-400" href={href}>
      {text}
    </Link>
  );
}
