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

const projects = [
  {
    title: "E-commerce AI Assistant",
    description: "An AI-powered sales assistant for an e-commerce platform, boosting engagement and conversions.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Next.js", "AI", "E-commerce"],
    hint: "online store"
  },
  {
    title: "Corporate Website Redesign",
    description: "A complete redesign of a corporate website, focusing on modern UI/UX and performance.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["WordPress", "SEO", "UI/UX"],
    hint: "corporate website"
  },
  {
    title: "SaaS Platform Development",
    description: "Built a scalable SaaS platform from the ground up with a focus on user experience and robust architecture.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Next.js", "Firebase", "Automation"],
    hint: "dashboard analytics"
  },
  {
    title: "Lead Generation Chatbot",
    description: "Developed a smart chatbot that captures and qualifies leads 24/7 for a real estate agency.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["AI", "Chatbot", "Lead Gen"],
    hint: "real estate"
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Work
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Here are some of the projects we are proud of.
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
            {projects.map((project) => (
              <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          data-ai-hint={project.hint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground font-body mb-4 text-sm">{project.description}</p>
                       <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
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
