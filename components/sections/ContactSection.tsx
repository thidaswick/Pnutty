"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getWhatsAppContactUrl } from "@/utils/whatsapp";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-section-cream section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Say Hi"
          title="Order. Ask."
          subtitle="WhatsApp is the fastest way to place orders. Or drop us a line — we read every message."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Button
              href={getWhatsAppContactUrl()}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              Order on WhatsApp
            </Button>

            <div className="space-y-6">
              <div>
                <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-wider text-chocolate/50">
                  Email
                </h3>
                <a
                  href="mailto:hello@pnutty.lk"
                  className="font-display text-lg font-semibold text-chocolate hover:text-peanut"
                >
                  hello@pnutty.lk
                </a>
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-wider text-chocolate/50">
                  Phone
                </h3>
                <a
                  href="tel:+94771234567"
                  className="font-display text-lg font-semibold text-chocolate hover:text-peanut"
                >
                  +94 77 123 4567
                </a>
              </div>
              <div>
                <h3 className="mb-1 font-display text-sm font-bold uppercase tracking-wider text-chocolate/50">
                  Find us
                </h3>
                <p className="font-display text-lg font-semibold text-chocolate">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/pnutty.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-chocolate text-cream transition-colors hover:bg-peanut hover:text-chocolate"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://facebook.com/pnutty.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-chocolate text-cream transition-colors hover:bg-peanut hover:text-chocolate"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-card-lg bg-white p-7 shadow-card ring-1 ring-chocolate/5 sm:p-8"
          >
            <h3 className="mb-6 font-display text-xl font-bold text-chocolate">
              Send a message
            </h3>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-chocolate">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate outline-none transition-colors focus:border-peanut"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-chocolate">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate outline-none transition-colors focus:border-peanut"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-chocolate">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate outline-none transition-colors focus:border-peanut"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-chocolate">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate outline-none transition-colors focus:border-peanut"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="mt-6 w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="mt-4 text-center text-sm font-semibold text-green">
                Message sent! We&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm font-semibold text-pink">
                Something went wrong. Please try again or WhatsApp us.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
