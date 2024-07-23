import Link from "next/link";
import { NavbarLink } from "./navbar-link";

export function Navbar() {
  return (
    <nav className="w-full h-12 bg-slate-900 flex flex-row justify-center items-center">
      <NavbarLink text={'home'} href={''} />
      <NavbarLink text={'students'} href={'/students'} />
      <NavbarLink text={'lockers'} href={'/lockers'} />
      <NavbarLink text={'locks'} href={'/locks'} />
      <NavbarLink text={'membership'} href={'/membership'} />
    </nav>
  );
}
