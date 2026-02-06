"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLUListElement | null>(null);

  // desktop outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // helper → mobile dropdown toggle (only one open)
  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(prev => (prev === name ? null : name));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[64px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="h-[44px] flex items-center">
            <Image
              src="/logo/ae-logo.png"
              alt="AE Logo"
              width={160}
              height={160}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="md:hidden text-2xl text-indigo-900"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileDropdown(null); // reset dropdowns
          }}
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <ul
          ref={navRef}
          className="hidden md:flex items-center gap-7 text-indigo-900 font-medium text-sm"
        >
          <li><Link href="/">Home</Link></li>

          {/* Company */}
          <li className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenMenu(openMenu === "company" ? null : "company")
              }
              className="hover:text-indigo-700"
            >
              Company
            </button>

            {openMenu === "company" && (
              <Dropdown>
                <DropdownLink href="/about/company/about-us" text="About Us" />
                <DropdownLink href="/company/events" text="Events" />
              </Dropdown>
            )}
          </li>

          {/* Products */}
          <li className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenMenu(openMenu === "products" ? null : "products")
              }
              className="hover:text-indigo-700"
            >
              Products
            </button>

            {openMenu === "products" && (
              <Dropdown>
                <DropdownLink href="/products" text="Night Vision Device" />
                <DropdownLink href="/products/thermal" text="Thermal Device" />
                <DropdownLink href="/products/others" text="Others" />
              </Dropdown>
            )}
          </li>

          <li><Link href="/testing-lab/overview">Testing Lab</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </div>

    


      {/* MOBILE MENU */}
{mobileOpen && (
  <div
    className="md:hidden bg-white border-t shadow
               px-4 py-4 text-sm
               max-h-[calc(100vh-64px)] overflow-y-auto"
  >
    {/* Home */}
    <Link
      href="/"
      className="block py-2 border-b"
      onClick={() => setMobileOpen(false)}
    >
      Home
    </Link>

    {/* Company */}
    <button
      type="button"
      className="w-full flex justify-between items-center py-2 font-medium"
      onClick={() => toggleMobileDropdown("company")}
    >
      Company <span>{mobileDropdown === "company" ? "−" : "+"}</span>
    </button>

    {mobileDropdown === "company" && (
      <div className="ml-4 mt-2 space-y-2">
        <Link
          href="/about/company/about-us"
          className="block py-1"
          onClick={() => setMobileOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/company/events"
          className="block py-1"
          onClick={() => setMobileOpen(false)}
        >
          Events
        </Link>
      </div>
    )}

    {/* Products */}
    <button
      type="button"
      className="w-full flex justify-between items-center py-2 font-medium"
      onClick={() => toggleMobileDropdown("products")}
    >
      Products <span>{mobileDropdown === "products" ? "−" : "+"}</span>
    </button>

    {mobileDropdown === "products" && (
      <div className="ml-4 mt-2 space-y-2">
        <Link
          href="/products"
          className="block py-1"
          onClick={() => setMobileOpen(false)}
        >
          Night Vision Device
        </Link>
        <Link
          href="/products/thermal"
          className="block py-1"
          onClick={() => setMobileOpen(false)}
        >
          Thermal Device
        </Link>
        <Link
          href="/products/others"
          className="block py-1"
          onClick={() => setMobileOpen(false)}
        >
          Others
        </Link>
      </div>
    )}

    {/* Testing Lab */}
    <Link
      href="/testing-lab/overview"
      className="block py-2 border-t"
      onClick={() => setMobileOpen(false)}
    >
      Testing Lab
    </Link>

    {/* Careers */}
    <Link
      href="/careers"
      className="block py-2"
      onClick={() => setMobileOpen(false)}
    >
      Careers
    </Link>

    {/* Contact Us */}
    <Link
      href="/contact-us"
      className="block py-2"
      onClick={() => setMobileOpen(false)}
    >
      Contact Us
    </Link>
  </div>
)}

    </nav>
  );
}

/* DROPDOWN (DESKTOP) */
function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-full mt-2 left-0 w-60 bg-white shadow-lg border rounded-md">
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
