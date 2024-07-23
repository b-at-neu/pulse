import Link from 'next/link';
import { NavbarLink } from './navbar-link';

export function Navbar() {
  return (
    <nav className="h-12 bg-slate-900 flex justify-center">
      <div className="w-3/5 h-full flex flex-row justify-around items-center">
        <NavbarLink text={'home'} href={''} />
        <NavbarLink text={'students'} href={'/students'} />
        <NavbarLink text={'lockers'} href={'/lockers'} />
        <NavbarLink text={'locks'} href={'/locks'} />
        <NavbarLink text={'membership'} href={'/membership'} />
      </div>
    </nav>
  );
}
