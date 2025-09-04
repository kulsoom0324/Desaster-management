import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const expertise = ["Next.js", "AI & Automation", "Graphic Design", "Content Writing", "Video Editing", "UI/UX Design"];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl order-last md:order-first">
            <Image
              src="https://picsum.photos/800/600"
              alt="AetherWeb AI Team Collaboration"
              fill
              className="object-cover"
              data-ai-hint="team collaboration"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              About AetherWeb AI
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              We are a forward-thinking web agency passionate about crafting
              exceptional digital experiences. Our core expertise lies in
              leveraging cutting-edge technologies to build fast, scalable, and
              intelligent web solutions for our clients. With a strong foundation in modern web development and AI, we provide a comprehensive suite of services to elevate your online presence.
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
