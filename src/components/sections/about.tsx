import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const expertise = ["Real-time Monitoring", "Predictive Analytics", "AI & Machine Learning", "GIS Mapping", "Early Warning Systems", "Resource Management"];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-last md:order-first">
            <Image
              src="https://picsum.photos/seed/climatemap/800/600"
              alt="Global Climate Monitoring Dashboard"
              fill
              className="object-cover"
              data-ai-hint="climate map"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              About ClimaGuard
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              ClimaGuard is a state-of-the-art climate disaster management system designed to empower communities, governments, and organizations. Our mission is to leverage cutting-edge AI and data analytics to provide timely, accurate, and actionable insights for mitigating the impact of climate-related disasters and building a more resilient future.
            </p>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
