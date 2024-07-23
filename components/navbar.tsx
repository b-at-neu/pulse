'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavbarLink } from '@/components/navbar-link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-12 bg-slate-900 flex justify-center">
      <div className="w-3/5 h-full flex flex-col md:flex-row justify-around items-center">
        {open && (
          <>
            <NavbarLink text={'home'} href={'/'} />
            <NavbarLink text={'students'} href={'/students'} />
            <NavbarLink text={'lockers'} href={'/lockers'} />
            <NavbarLink text={'locks'} href={'/locks'} />
            <NavbarLink text={'membership'} href={'/membership'} />
          </>
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
