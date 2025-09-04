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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleGenerateProposal } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().min(1, "Please enter your budget."),
  features: z.string().min(10, "Please describe the features you need."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProposalGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [proposal, setProposal] = useState("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      budget: "",
      features: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setProposal("");
    try {
      const result = await handleGenerateProposal(values);
      if (result.success && result.data) {
        setProposal(result.data.proposal);
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
        description: "Could not generate the proposal.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>AI Proposal Generator</CardTitle>
            <CardDescription>Fill out the form below to get an instant project proposal and cost estimate.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a project type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="website">Website</SelectItem>
                                        <SelectItem value="e-commerce">E-commerce Store</SelectItem>
                                        <SelectItem value="landing-page">Landing Page</SelectItem>
                                        <SelectItem value="webapp">Web Application</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Budget ($)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., 5000" {...field} type="number" disabled={isLoading}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="features"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Desired Features</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="e.g., User authentication, blog, contact form, admin dashboard..."
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Generate Proposal
                    </Button>
                </form>
            </Form>

            {(isLoading || proposal) && (
                 <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Generated Proposal</h3>
                    <Card className="bg-muted">
                        <CardContent className="p-4">
                            {isLoading ? (
                                <div className="space-y-2">
                                    <div className="h-4 bg-foreground/10 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-full animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-2/3 animate-pulse"></div>
                                </div>
                            ) : (
                                <pre className="whitespace-pre-wrap font-body text-sm">{proposal}</pre>
                            )}
                        </CardContent>
                    </Card>
                 </div>
            )}
        </CardContent>
    </Card>
  );
}
