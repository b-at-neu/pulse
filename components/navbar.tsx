'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavbarLinks } from '@/components/navbar-links';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center">
      <div className="hidden md:flex flex-row w-3/5 justify-around items-center">
        <NavbarLinks />
      </div>
      <div className="md:hidden flex flex-col w-full items-center">
        {open && <NavbarLinks />}
        <div className="flex items-center flex-row">
          <Button variant="ghost" onMouseDown={() => setOpen(!open)}>
            {!open && <ChevronDown />}
            {open && <ChevronUp />}
            <span className="sr-only">Show Pages</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
