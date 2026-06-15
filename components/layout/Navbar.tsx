"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-6",
          scrolled
            ? "bg-white/90 shadow-card backdrop-blur-xl"
            : "bg-white/60 shadow-sm backdrop-blur-md"
        )}
      >
        <Link href="/" className="relative z-50 flex shrink-0 items-center">
          <Image
            src="/images/pnutty-logo.jpg"
            alt="Pnutty"
            width={130}
            height={52}
            className="h-9 w-auto sm:h-10 md:h-11"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 font-display text-sm font-semibold text-chocolate/85 transition-all duration-200 hover:bg-peanut/15 hover:text-chocolate xl:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/products"
            className="hidden rounded-full bg-chocolate px-4 py-2 font-display text-sm font-semibold text-cream shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-chocolate-light hover:shadow-button-hover sm:inline-flex"
          >
            Shop
          </Link>

          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cream text-chocolate shadow-sm ring-1 ring-chocolate/10 transition-all duration-300 hover:bg-peanut/20 hover:shadow-md sm:h-11 sm:w-11"
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
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-peanut text-[10px] font-bold text-chocolate ring-2 ring-white">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cream font-display text-lg text-chocolate shadow-sm ring-1 ring-chocolate/10 transition-all hover:bg-peanut/20 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-chocolate/96 backdrop-blur-xl transition-all duration-400 lg:hidden",
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold text-cream transition-all duration-300 hover:scale-105 hover:text-peanut"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button
              href="/products"
              variant="primary"
              size="lg"
              onClick={() => setMobileOpen(false)}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
