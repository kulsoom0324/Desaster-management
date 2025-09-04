import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeXml, Palette, FileText, Video, Bot, LineChart } from "lucide-react";

const services = [
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: "Web Design & Development",
    description:
      "Creating stunning, high-performance websites with Next.js and modern frontend technologies. We focus on responsive design and exceptional user experience.",
    price: "$300+",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "Graphic Designing",
    description:
      "Visually stunning graphics to captivate your audience and elevate your brand identity.",
    price: "$150+",
  },
  {
    icon: <FileText className="w-8 h-8 text-primary" />,
    title: "Content Writing",
    description:
      "Compelling and SEO-friendly content that engages your readers and communicates your message effectively.",
    price: "$100+",
  },
   {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Digital Marketing",
    description:
      "Boost your online presence with our data-driven digital marketing strategies, including SEO, and social media management.",
    price: "$250+",
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: "Video Editing",
    description:
      "Professional video editing services to make your content shine. From corporate videos to social media clips, we bring your vision to life.",
    price: "$150+",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description:
      "Integrate intelligent automation into your business. From AI-powered chatbots to automated workflows, we help you work smarter, not harder.",
    price: "$500+",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <CardFooter className="flex-col">
                <p className="text-lg font-bold text-primary">{service.price}</p>
                <p className="text-sm text-muted-foreground">Starting From</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}