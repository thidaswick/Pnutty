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
    <footer className="pattern-chocolate text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/pnutty-logo.png"
              alt="Pnutty"
              width={140}
              height={56}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-cream/80">
              Spread the Nutty Goodness. Made with love in Sri Lanka 🇱🇰
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Shop</h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-peanut"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Brand</h4>
            <ul className="space-y-2">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-peanut"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg font-bold">Stay nutty</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a
                  href="mailto:hello@pnutty.lk"
                  className="transition-colors hover:text-peanut"
                >
                  hello@pnutty.lk
                </a>
              </li>
              <li>Colombo, Sri Lanka</li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/pnutty.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-peanut"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/pnutty.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-peanut"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/50">
          © {new Date().getFullYear()} Pnutty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
