import { House, User, Lock, BookKey, DoorOpen } from "lucide-react";
import { NavbarLink } from "@/components/navbar-link";

export function NavbarLinks() {
  return (
    <>
      <NavbarLink text={'Home'} href={'/'} icon={<House />} />
      <NavbarLink text={'Students'} href={'/students'} icon={<User />} />
      <NavbarLink text={'Lockers'} href={'/lockers'} icon={<DoorOpen />} />
      <NavbarLink text={'Locks'} href={'/locks'} icon={<Lock />} />
      <NavbarLink text={'Membership'} href={'/membership'} icon={<BookKey />} />
    </>
  );
}
