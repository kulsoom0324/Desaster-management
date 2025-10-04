import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Siren, Bot, Telescope, BarChart, FileWarning, Map } from "lucide-react";

const features = [
  {
    icon: <Telescope className="w-8 h-8 text-primary" />,
    title: "Real-time Monitoring",
    description:
      "Track critical climate data, from satellite imagery to ground sensor networks, all on a unified dashboard.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Powered Predictions",
    description:
      "Utilize advanced machine learning models to forecast disaster paths, intensity, and potential impact with high accuracy.",
  },
  {
    icon: <Siren className="w-8 h-8 text-primary" />,
    title: "Early Warning System",
    description:
      "Deliver timely and targeted alerts to affected populations through multiple channels, ensuring preparedness.",
  },
   {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Resource Management",
    description:
      "Optimize the allocation of emergency resources, personnel, and aid with our intelligent logistics and planning tools.",
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Interactive GIS Mapping",
    description:
      "Visualize disaster data, vulnerable zones, and resource locations on dynamic, high-resolution maps.",
  },
  {
    icon: <FileWarning className="w-8 h-8 text-primary" />,
    title: "Automated Reporting",
    description:
      "Generate comprehensive damage assessments and post-disaster reports automatically to speed up recovery efforts.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Platform Features
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            A comprehensive suite of tools for end-to-end disaster management.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center flex flex-col hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground font-body">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
