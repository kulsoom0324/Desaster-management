"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages = [
  {
    src: "https://picsum.photos/seed/flood/1920/1080",
    alt: "A city street after a flood",
    hint: "flooded city",
  },
  {
    src: "https://picsum.photos/seed/earthquake/1920/1080",
    alt: "A cracked road after an earthquake",
    hint: "earthquake crack",
  },
  {
    src: "https://picsum.photos/seed/wildfire/1920/1080",
    alt: "A forest fire",
    hint: "forest fire",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center"
    >
      <Carousel
        className="absolute w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 bg-background/50" />
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6 relative z-10 text-foreground">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter drop-shadow-lg">
          Disaster Management Complete System
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-body drop-shadow-md">
          An AI-powered platform for monitoring, predicting, and managing
          disasters to protect communities and save lives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">Request a Demo</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-foreground/50 hover:bg-white/50 hover:text-foreground"
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
