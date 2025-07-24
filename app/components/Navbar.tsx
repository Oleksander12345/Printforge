"use client";

import Link from "next/link"
import NavLink from "@/app/components/NavLink"
import PFLogoIcon from "../assets/printforge-icon-logo.svg"
import PFLogo from "../assets/printforge-logo.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon}
              alt="PrintForge Logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          {/* <li className="text-sm uppercase cursor-pointer"> */}
            <NavLink href="/3d-models" isActive={pathname === '/3d-models'}>3D Models</NavLink>
          {/* </li> */}
          {/* <li className="text-sm uppercase cursor-pointer"> */}
            <NavLink href="/about"  isActive={pathname === '/about'}>About</NavLink>
          {/* </li> */}
        </ul>
      </nav>
    </header>
  )
}