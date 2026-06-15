import type { CartItem } from "@/types";
import { formatPriceNumber } from "./format";

export function generateWhatsAppOrderMessage(
  items: CartItem[],
  customerInfo?: {
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
  }
): string {
  const lines: string[] = ["🥜 *New Pnutty Order*", ""];

  if (customerInfo?.name) {
    lines.push(`*Name:* ${customerInfo.name}`);
  }
  if (customerInfo?.phone) {
    lines.push(`*Phone:* ${customerInfo.phone}`);
  }
  if (customerInfo?.address) {
    lines.push(`*Address:* ${customerInfo.address}`);
  }
  if (customerInfo?.city) {
    lines.push(`*City:* ${customerInfo.city}`);
  }

  lines.push("", "*Items:*");

  let total = 0;
  items.forEach((item) => {
    const subtotal = item.product.price * item.quantity;
    total += subtotal;
    lines.push(
      `• ${item.product.name} x${item.quantity} — LKR ${formatPriceNumber(subtotal)}`
    );
  });

  lines.push("", `*Total: LKR ${formatPriceNumber(total)}*`);
  lines.push("", "Thank you for choosing Pnutty! 🥜");

  return lines.join("\n");
}

export function getWhatsAppUrl(message: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "94771234567";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function getWhatsAppContactUrl(): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "94771234567";
  const message = encodeURIComponent(
    "Hi Pnutty! I'd like to place an order 🥜"
  );
  return `https://wa.me/${number}?text=${message}`;
}
