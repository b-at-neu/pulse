import { NavbarLink } from "@/components/navbar-link";

export function NavbarLinks() {
  return (
    <>
      <NavbarLink text={'home'} href={'/'} />
      <NavbarLink text={'students'} href={'/students'} />
      <NavbarLink text={'lockers'} href={'/lockers'} />
      <NavbarLink text={'locks'} href={'/locks'} />
      <NavbarLink text={'membership'} href={'/membership'} />
    </>
  );
}
