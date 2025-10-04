import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Siren, Bot, Telescope, BarChart, FileWarning, Map, ShieldCheck, Warehouse, Home, Package } from "lucide-react";

const features = [
  {
    icon: <Telescope className="w-8 h-8 text-primary" />,
    title: "Real-time Monitoring",
    description:
      "Track critical climate data for floods, earthquakes, tsunamis, landslides, and cloudbursts using a unified dashboard.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Powered Predictions",
    description:
      "Utilize advanced machine learning to forecast disaster paths, intensity, and potential impact with high accuracy.",
  },
  {
    icon: <Siren className="w-8 h-8 text-primary" />,
    title: "Early Warning System",
    description:
      "Deliver timely, targeted alerts to affected populations through multiple channels, ensuring maximum preparedness.",
  },
   {
    icon: <Warehouse className="w-8 h-8 text-primary" />,
    title: "Aid & Inventory Management",
    description:
      "Optimize the allocation of emergency resources, safety kits, and aid with our intelligent logistics and planning tools.",
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Shelter Identification",
    description:
      "Instantly locate and map the nearest available emergency shelters, complete with capacity and resource information.",
  },
  {
    icon: <Package className="w-8 h-8 text-primary" />,
    title: "Emergency Backpack Guide",
    description:
      "Receive AI-driven guidance on essential items for your emergency backpack, tailored to specific disaster scenarios.",
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
