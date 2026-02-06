"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/ae-logo.png"
            alt="AE Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-indigo-900 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-indigo-900 font-medium">

          <li><Link href="/" className="hover:text-indigo-700">Home</Link></li>

          {/* Company */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("company")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-indigo-700">
              Company
            </span>

            {openMenu === "company" && (
              <Dropdown>
                <DropdownLink href="/about/company/about-us" text="About Us" />
                <DropdownLink href="/company/events" text="Events" />
              </Dropdown>
            )}
          </li>

          {/* Products */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-indigo-700">
              Products
            </span>

            {openMenu === "products" && (
              <Dropdown>
                <DropdownLink href="/products" text="Night Vision Device" />
                <DropdownLink href="/products/thermal" text="Thermal Device" />
                <DropdownLink href="/products/others" text="Others" />
              </Dropdown>
            )}
          </li>

          <li><Link href="/testing-lab/overview" className="hover:text-indigo-700">Testing Lab</Link></li>
          <li><Link href="/careers" className="hover:text-indigo-700">Careers</Link></li>
          <li><Link href="/contact-us" className="hover:text-indigo-700">Contact Us</Link></li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-6 space-y-4 text-indigo-900 font-medium">

          <Link href="/" onClick={() => setMobileOpen(false)} className="block">
            Home
          </Link>

          {/* Mobile Company Dropdown */}
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() =>
              setMobileDropdown(mobileDropdown === "company" ? null : "company")
            }
          >
            Company <span>{mobileDropdown === "company" ? "−" : "+"}</span>
          </button>

          {mobileDropdown === "company" && (
            <div className="ml-4 space-y-2 text-sm">
              <Link href="/about/company/about-us" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/company/events" onClick={() => setMobileOpen(false)}>Events</Link>
            </div>
          )}

          {/* Mobile Products Dropdown */}
          <button
            className="w-full text-left flex justify-between items-center"
            onClick={() =>
              setMobileDropdown(mobileDropdown === "products" ? null : "products")
            }
          >
            Products <span>{mobileDropdown === "products" ? "−" : "+"}</span>
          </button>

          {mobileDropdown === "products" && (
            <div className="ml-4 space-y-2 text-sm">
              <Link href="/products" onClick={() => setMobileOpen(false)}>Night Vision Device</Link>
              <Link href="/products/thermal" onClick={() => setMobileOpen(false)}>Thermal Device</Link>
              <Link href="/products/others" onClick={() => setMobileOpen(false)}>Others</Link>
            </div>
          )}

          <Link href="/testing-lab/overview" onClick={() => setMobileOpen(false)} className="block">
            Testing Lab
          </Link>

          <Link href="/careers" onClick={() => setMobileOpen(false)} className="block">
            Careers
          </Link>

          <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="block">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

/* Dropdown Components */
function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-9 left-0 w-64 bg-white shadow-lg border rounded-md z-50">
      {children}
    </div>
  );
}

function DropdownLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="block px-4 py-2 hover:bg-gray-100">
      {text}
    </Link>
  );
}
