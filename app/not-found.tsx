import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <span className="mb-4 text-7xl">🥜</span>
      <h1 className="mb-2 font-display text-4xl font-bold text-chocolate">
        Page not found
      </h1>
      <p className="mb-8 text-chocolate/60">
        Looks like this jar is empty. Let&apos;s get you back on track.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </div>
  );
}
