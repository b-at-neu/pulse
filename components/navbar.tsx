import Link from "next/link";
import { NavbarLink } from "./navbar-link";

export function Navbar() {
  return <nav className="w-full h-12 bg-slate-900 flex flex-row justify-center items-center">
    <NavbarLink text={"Home"} href={""} />
  </nav>;
}
