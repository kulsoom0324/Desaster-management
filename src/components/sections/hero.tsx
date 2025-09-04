import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full py-24 md:py-32 lg:py-48 bg-secondary"
    >
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
          Elevate Your Business with AI-Powered Web Solutions
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
          AetherWeb AI is a modern web agency specializing in Next.js, AI
          automation, and SEO to help your business thrive in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Get Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#tools">Explore AI Tools</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
