import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Bot, FileText, Lightbulb, PenSquare } from "lucide-react";
import AiChatbot from "../ai/ai-chatbot";
import ProposalGenerator from "../ai/proposal-generator";
import ContentGenerator from "../ai/content-generator";
import ServiceRecommender from "../ai/service-recommender";

export default function AiToolsSection() {
  return (
    <section id="tools" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Explore Our AI-Powered Tools
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-2">
            Experience the power of AI in disaster management with our interactive demos.
          </p>
        </div>
        <Tabs defaultValue="chatbot" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-12">
            <TabsTrigger value="chatbot" className="py-2.5">
              <Bot className="mr-2 h-4 w-4" />
              Alert Bot
            </TabsTrigger>
            <TabsTrigger value="proposal" className="py-2.5">
              <FileText className="mr-2 h-4 w-4" />
              Report Gen
            </TabsTrigger>
            <TabsTrigger value="content" className="py-2.5">
              <PenSquare className="mr-2 h-4 w-4" />
              Comms Writer
            </TabsTrigger>
            <TabsTrigger value="recommender" className="py-2.5">
              <Lightbulb className="mr-2 h-4 w-4" />
              Action Recommender
            </TabsTrigger>
          </TabsList>
          <TabsContent value="chatbot">
            <AiChatbot />
          </TabsContent>
          <TabsContent value="proposal">
            <ProposalGenerator />
          </TabsContent>
          <TabsContent value="content">
            <ContentGenerator />
          </TabsContent>
          <TabsContent value="recommender">
            <ServiceRecommender />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
