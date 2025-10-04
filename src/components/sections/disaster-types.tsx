import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const disasters = [
  {
    title: "Floods",
    description: "Analyze river levels and rainfall data to forecast flood events and map inundation zones.",
    image: "https://picsum.photos/seed/flood-city/600/400",
    tags: ["Forecasting", "GIS Mapping", "Alerts"],
    hint: "flooded city"
  },
  {
    title: "Earthquakes",
    description: "Provide instant alerts upon seismic detection and run simulations for potential aftershock impact.",
    image: "https://picsum.photos/seed/earthquake-crack/600/400",
    tags: ["Alerts", "Simulation", "Damage Assessment"],
    hint: "cracked ground"
  },
  {
    title: "Tsunamis",
    description: "Monitor undersea seismic activity to issue timely coastal evacuation warnings and model wave propagation.",
    image: "https://picsum.photos/seed/tsunami-wave/600/400",
    tags: ["Evacuation", "Prediction", "Coastal Safety"],
    hint: "large wave"
  },
  {
    title: "Landslides",
    description: "Analyze soil stability and weather patterns to identify high-risk slopes and protect communities.",
    image: "https://picsum.photos/seed/landslide/600/400",
    tags: ["Risk Analysis", "Monitoring", "Prevention"],
    hint: "muddy hillside"
  },
  {
    title: "Cloudbursts",
    description: "Track intense, localized rainfall to warn of flash floods and manage urban drainage systems.",
    image: "https://picsum.photos/seed/cloudburst/600/400",
    tags: ["Flash Flood", "Urban Safety", "Real-time"],
    hint: "heavy rain"
  },
];

export default function DisasterTypesSection() {
  return (
    <section id="disasters" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Disasters We Cover
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Our system is adaptable to a wide range of climate and geological threats.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {disasters.map((disaster) => (
              <CarouselItem key={disaster.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={disaster.image}
                          alt={disaster.title}
                          fill
                          className="object-cover"
                          data-ai-hint={disaster.hint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline mb-2">{disaster.title}</CardTitle>
                      <p className="text-muted-foreground font-body mb-4 text-sm">{disaster.description}</p>
                       <div className="flex flex-wrap gap-2">
                        {disaster.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
