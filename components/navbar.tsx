'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavbarLinks } from '@/components/navbar-links';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center bg-background">
      <div className="hidden md:flex flex-row w-3/5 justify-around items-center">
        <NavbarLinks />
      </div>
      <div
        className={cn('md:hidden flex flex-col justify-around w-full items-center transition-all', open ? 'h-60' : 'h-12')}
      >
        {open && <NavbarLinks />}
        <Button className="w-full grow" variant="ghost" onClick={() => setOpen(!open)}>
          {!open && <ChevronDown />}
          {open && <ChevronUp />}
          <span className="sr-only">Show Pages</span>
        </Button>
      </div>
    </nav>
  );
}
