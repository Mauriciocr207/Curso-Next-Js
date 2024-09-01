"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface Props {
    path: string,
    title: string,
}

export default function ActiveLink({ path, title }: Props) {
    const pathname = usePathname();
  return (
    <Link className={`${style.link}  ${pathname === path && style['active-link']}`} key={path} href={path}>
      {title}
    </Link>
  );
}