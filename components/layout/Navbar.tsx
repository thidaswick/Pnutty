"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/utils/format";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/#flavours", label: "Flavours" },
  { href: "/about", label: "About" },
  { href: "/#how-to-enjoy", label: "How to Enjoy" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <Image
            src="/images/pnutty-logo.png"
            alt="Pnutty"
            width={120}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold text-chocolate transition-colors hover:text-peanut"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-chocolate shadow-md backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-peanut text-xs font-bold text-chocolate">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-chocolate shadow-md backdrop-blur-sm md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-chocolate/95 backdrop-blur-md transition-all duration-300 md:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold text-cream transition-colors hover:text-peanut"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
