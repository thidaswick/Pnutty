import Image from "next/image";
import Link from "next/link";

const shopLinks = [
  { href: "/products/classic-peanut-butter-crunchy", label: "Classic Crunchy" },
  { href: "/products/choco-peanut-butter-crunchy", label: "Choco Crunchy" },
  { href: "/products/choco-peanut-butter-creamy", label: "Choco Creamy" },
  { href: "/products/classic-peanut-butter-creamy", label: "Classic Creamy" },
];

const brandLinks = [
  { href: "/about", label: "About" },
  { href: "/#flavours", label: "Flavours" },
  { href: "/#how-to-enjoy", label: "How to Enjoy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative pattern-chocolate text-cream">
      {/* Top wave */}
      <div className="absolute -top-px left-0 right-0 h-8 overflow-hidden sm:h-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48V24C240 0 480 0 720 24C960 48 1200 48 1440 24V48H0Z"
            fill="#5e2f11"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/pnutty-logo.jpg"
              alt="Pnutty"
            width={150}
            height={60}
            className="h-11 w-auto sm:h-12"
            />
            <p className="max-w-xs text-sm leading-relaxed text-cream/75">
              Spread the Nutty Goodness. Made with love in Sri Lanka 🇱🇰
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-bold tracking-wide text-peanut sm:text-lg">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/65 transition-colors duration-200 hover:text-peanut"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-bold tracking-wide text-peanut sm:text-lg">
              Brand
            </h4>
            <ul className="space-y-2.5">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/65 transition-colors duration-200 hover:text-peanut"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-bold tracking-wide text-peanut sm:text-lg">
              Stay nutty
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/65">
              <li>
                <a
                  href="mailto:hello@pnutty.lk"
                  className="transition-colors duration-200 hover:text-peanut"
                >
                  hello@pnutty.lk
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/pnutty.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-xs font-bold transition-all duration-200 hover:bg-peanut hover:text-chocolate"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  href="https://facebook.com/pnutty.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-xs font-bold transition-all duration-200 hover:bg-peanut hover:text-chocolate"
                  aria-label="Facebook"
                >
                  FB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 text-center text-xs text-cream/45 sm:flex-row sm:text-left sm:text-sm">
          <p>© {new Date().getFullYear()} Pnutty. All rights reserved.</p>
          <p className="text-cream/35">Spread the Nutty Goodness 🥜</p>
        </div>
      </div>
    </footer>
  );
}
