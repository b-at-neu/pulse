'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavbarLinks } from '@/components/navbar-links';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-12 bg-slate-900 flex justify-center">
      <div className="md:w-3/5 h-full flex flex-col md:flex-row justify-around items-center">
        {open && (
          <NavbarLinks />
        )}
        <div className="flex items-center flex-row">
          {!open && <p>home</p>}
          <Button onMouseDown={() => setOpen(!open)}>
            <ChevronDown />
          </Button>
        </div>
      </div>
    </nav>
  );
}
