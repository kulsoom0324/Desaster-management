import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const partners = [
  {
    quote: "ClimaGuard's predictive analytics have been instrumental in our pre-emptive evacuation strategies, saving countless lives during the last hurricane season.",
    name: "Dr. Alisha Reed",
    title: "Director, National Disaster Agency",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    hint: "woman portrait"
  },
  {
    quote: "The platform's real-time data integration gives our first responders the critical edge they need in the field. It's a revolutionary tool for emergency services.",
    name: "Michael Chen",
    title: "Chief, Emergency Response Unit",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    hint: "man portrait"
  },
  {
    quote: "As a meteorological organization, partnering with ClimaGuard has allowed us to translate our complex data into actionable public warnings effectively.",
    name: "Dr. Sarah Jenkins",
    title: "Lead Scientist, Global Weather Org",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    hint: "woman face"
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Trusted by Leading Organizations
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Hear from our partners who are on the front lines of disaster management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner.name} className="flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                <blockquote className="text-muted-foreground font-body mb-4">
                  "{partner.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={partner.avatar} alt={partner.name} data-ai-hint={partner.hint} />
                    <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{partner.name}</p>
                    <p className="text-sm text-muted-foreground">{partner.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
