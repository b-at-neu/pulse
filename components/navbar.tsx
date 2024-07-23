import Link from "next/link";

export function Navbar() {
  return <nav className="w-full h-12 bg-slate-900 flex flex-row justify-center items-center">
    <Link className="h-fit hover:text-slate-400" href={""}>Home</Link>
  </nav>;
}
