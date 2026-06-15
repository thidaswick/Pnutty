import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pnutty — Spread the Nutty Goodness",
    template: "%s | Pnutty",
  },
  description:
    "Premium peanut butter made for every mood — crunchy, creamy, classic, and choco. Roasted, blended, and jarred with love in Sri Lanka.",
  keywords: [
    "peanut butter",
    "Sri Lanka",
    "Pnutty",
    "crunchy",
    "creamy",
    "chocolate peanut butter",
  ],
  openGraph: {
    title: "Pnutty — Spread the Nutty Goodness",
    description:
      "Premium peanut butter made for every mood — crunchy, creamy, classic, and choco.",
    type: "website",
    locale: "en_LK",
    siteName: "Pnutty",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
