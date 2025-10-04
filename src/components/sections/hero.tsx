import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  {
    src: "https://picsum.photos/seed/hero-flood/1920/1080",
    alt: "A flooded city street",
    hint: "flooded city"
  },
  {
    src: "https://picsum.photos/seed/hero-earthquake/1920/1080",
    alt: "A street with cracked ground after an earthquake",
    hint: "cracked ground"
  },
  {
    src: "https://picsum.photos/seed/hero-response/1920/1080",
    alt: "Emergency response team in action",
    hint: "emergency response"
  }
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center"
    >
      <Carousel
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image) => (
            <CarouselItem key={image.src} className="h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter drop-shadow-lg">
          Disaster Management Complete System
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 font-body drop-shadow-md">
          An AI-powered platform for monitoring, predicting, and managing disasters to protect communities and save lives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Request a Demo</Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}