"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/knowledge-center", label: "Knowledge" },
    { href: "/clinic-days", label: "Clinic Days" },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      
      {/* Desktop Nav */}
      <nav className="flex flex-row hidden md:flex bg-white rounded-lg shadow px-4 py-2 w-max p-50">
        <div className="flex flex-row items-center mr-10">
          <Image
            src="/Logo.png"
            alt="Clinic Logo"
            width={40}
            height={40}
            className="object-contain mr-4"
          />
          <div className="text-lg font-bold text-gray-800">
            Sexual Health Centre Anuradhapura

          </div>
          
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Button */}
      <button
        className="md:hidden bg-white rounded-lg shadow px-3 py-2"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white rounded-lg shadow mt-2 px-4 py-3 text-center space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
