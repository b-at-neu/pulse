'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavbarLinks } from '@/components/navbar-links';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center bg-background">
      <div className="hidden md:flex flex-row w-3/5 justify-around items-center">
        <NavbarLinks />
      </div>
      <div
        className={cn(
          'md:hidden flex flex-col gap-2 justify-around w-full items-center transition-all',
          open ? 'h-80' : 'h-12'
        )}
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
