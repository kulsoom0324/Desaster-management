import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeXml, Megaphone, Bot } from "lucide-react";

const services = [
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: "Web Design & Development",
    description:
      "Creating stunning, high-performance websites with Next.js and modern frontend technologies. We focus on responsive design and exceptional user experience.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "SEO & Marketing",
    description:
      "Boost your online visibility and drive organic traffic. Our SEO strategies are designed to rank your website higher and attract your target audience.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description:
      "Integrate intelligent automation into your business. From AI-powered chatbots to automated workflows, we help you work smarter, not harder.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            We offer a range of services to help your business succeed online.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="text-center flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 w-fit">
                  {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground font-body">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
