import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pnutty — order via WhatsApp, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
