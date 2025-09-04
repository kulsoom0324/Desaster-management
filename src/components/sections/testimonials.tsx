import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "AetherWeb AI transformed our online presence. Their expertise in Next.js and AI is unparalleled. Our new site is blazing fast and the chatbot has improved lead quality by 40%.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    hint: "woman portrait"
  },
  {
    quote: "The SEO services provided were top-notch. We saw a 200% increase in organic traffic within three months. Highly recommended for anyone serious about growth.",
    name: "John Smith",
    title: "Marketing Director, Growthify",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    hint: "man portrait"
  },
  {
    quote: "The AI proposal generator is a game-changer. It saved us hours of work and helped us close deals faster. The team at AetherWeb AI is professional and deliver results.",
    name: "Emily White",
    title: "Founder, StartupX",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    hint: "woman face"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Real stories from businesses we've helped empower.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                <blockquote className="text-muted-foreground font-body mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
