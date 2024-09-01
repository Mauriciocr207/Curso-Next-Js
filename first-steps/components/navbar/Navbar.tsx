import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navItems = [
    {path: "/about", title: "About"},
    {path: "/contact", title: "Contact"},
    {path: "/pricing", title: "Pricing"},
]

export default function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 px-5 py-4 m-2 rounded justify-between">
      <Link href="/" className="flex gap-2">
        <HomeIcon size={20} className="text-white" />
        Home
      </Link>
      <ul className="flex gap-4">
        {navItems.map((navItem) => (
          <ActiveLink key={navItem.path} {...navItem} />
        ))}
      </ul>
    </nav>
  );
}
