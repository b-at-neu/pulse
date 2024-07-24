'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavbarLinks } from '@/components/navbar-links';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center">
      <div className="md:w-3/5 h-full flex flex-col md:flex-row justify-around items-center">
        {open && <NavbarLinks />}
        <div className="flex items-center flex-row">
          {!open && <p className='p-3'>home</p>}
          <Button onMouseDown={() => setOpen(!open)}>
            {!open && <ChevronDown />}
            {open && <ChevronUp />}
            <span className="sr-only">Show Pages</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
