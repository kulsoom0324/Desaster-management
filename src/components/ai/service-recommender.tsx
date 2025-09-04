"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleRecommendService } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import type { AIServiceRecommenderOutput } from "@/ai/flows/ai-service-recommender";

const formSchema = z.object({
  query: z.string().min(10, "Please describe your needs in a bit more detail."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ServiceRecommender() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<AIServiceRecommenderOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await handleRecommendService(values);
      if (result.success && result.data) {
        setRecommendation(result.data);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not get a recommendation.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>AI Service Recommender</CardTitle>
            <CardDescription>Not sure which service is right for you? Describe your needs, and our AI will suggest the best fit.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="query"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Describe your business needs</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="e.g., 'I want to sell products online and need a modern-looking store', or 'I need to automate customer support questions'."
                                        {...field}
                                        rows={4}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Get Recommendation
                    </Button>
                </form>
            </Form>

             {(isLoading || recommendation) && (
                 <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Our Recommendation</h3>
                    <Card className="bg-muted">
                        <CardContent className="p-4">
                            {isLoading ? (
                                <div className="space-y-2">
                                    <div className="h-4 bg-foreground/10 rounded w-1/4 animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-full animate-pulse"></div>
                                </div>
                            ) : recommendation && (
                                <div className="space-y-2">
                                    <p className="font-semibold text-primary">{recommendation.serviceRecommendation}</p>
                                    <p className="text-sm">{recommendation.explanation}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                 </div>
            )}
        </CardContent>
    </Card>
  );
}
