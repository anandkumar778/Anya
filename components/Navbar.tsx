"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLUListElement | null>(null);

  // Desktop outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock scroll when mobile open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[64px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/ae-logo.png"
            alt="AE Logo"
            width={150}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-indigo-900"
          onClick={() => {
            setMobileOpen(true);
            setMobileDropdown(null);
          }}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul
          ref={navRef}
          className="hidden md:flex items-center gap-8 text-indigo-900 font-medium text-sm"
        >
          <li><Link href="/">Home</Link></li>

          <li className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "company" ? null : "company")
              }
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

          <li className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === "products" ? null : "products")
              }
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

          <li><Link href="/testing-lab">Testing Lab</Link></li>
          <li><Link href="/careers">Careers</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </div>

      {/* MOBILE POPUP DRAWER */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:hidden`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl 
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-lg font-semibold text-indigo-900">
              Menu
            </h2>
            <button
              className="text-2xl"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-5 space-y-4 text-base">

            <Link
              href="/"
              className="block py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Company */}
            <button
              className="w-full flex justify-between py-2 border-b"
              onClick={() => toggleMobileDropdown("company")}
            >
              Company
              <span>{mobileDropdown === "company" ? "−" : "+"}</span>
            </button>

            {mobileDropdown === "company" && (
              <div className="ml-4 space-y-2 text-gray-600">
                <Link href="/about/company/about-us" className="block" onClick={() => setMobileOpen(false)}>About Us</Link>
                <Link href="/company/events" className="block" onClick={() => setMobileOpen(false)}>Events</Link>
              </div>
            )}

            {/* Products */}
            <button
              className="w-full flex justify-between py-2 border-b"
              onClick={() => toggleMobileDropdown("products")}
            >
              Products
              <span>{mobileDropdown === "products" ? "−" : "+"}</span>
            </button>

            {mobileDropdown === "products" && (
              <div className="ml-4 space-y-2 text-gray-600">
                <Link href="/products" className="block" onClick={() => setMobileOpen(false)}>Night Vision Device</Link>
                <Link href="/products/thermal" className="block" onClick={() => setMobileOpen(false)}>Thermal Device</Link>
                <Link href="/products/others" className="block" onClick={() => setMobileOpen(false)}>Others</Link>
              </div>
            )}

            {/* FIXED LINKS (NOW SEPARATE LINES) */}
            <Link
              href="/testing-lab"
              className="block py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Testing Lab
            </Link>

            <Link
              href="/careers"
              className="block py-2 border-b"
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </Link>

            <Link
              href="/contact-us"
              className="block py-2"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>

          </div>
        </div>
      </>
    </nav>
  );
}

/* Desktop Dropdown */
function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-full mt-2 left-0 w-56 bg-white shadow-xl border rounded-md py-2">
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
