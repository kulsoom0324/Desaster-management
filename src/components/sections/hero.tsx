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
          Disaster Management Complete System
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
          An AI-powered platform for monitoring, predicting, and managing disasters to protect communities and save lives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Request a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
