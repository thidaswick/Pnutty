import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <SectionHeading
            badge="Success"
            title="Order placed!"
            subtitle="We've saved your order and opened WhatsApp so you can confirm with our team. We'll get your jars on the way soon!"
          />
          <span className="mb-8 block text-7xl">🥜✨</span>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/products" variant="primary">
              Continue Shopping
            </Button>
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
