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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleGenerateContent } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  topic: z.string().min(3, "Topic must be at least 3 characters."),
  type: z.string().min(1, "Please select a content type."),
  keywords: z.string().min(1, "Please provide some keywords."),
  tone: z.string().min(1, "Please select a tone."),
  length: z.string().min(1, "Please select a length."),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContentGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      type: "blog",
      keywords: "",
      tone: "professional",
      length: "medium",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setContent("");
    try {
      const result = await handleGenerateContent(values);
      if (result.success && result.data) {
        setContent(result.data.content);
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
        description: "Could not generate the content.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>AI Content Writer</CardTitle>
            <CardDescription>Generate high-quality content for your website, blog, or products in seconds.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                     <div className="grid md:grid-cols-2 gap-4">
                         <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Topic</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., The Future of AI" {...field} disabled={isLoading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Select a type" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="blog">Blog Post</SelectItem>
                                            <SelectItem value="product description">Product Description</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tone</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Select a tone" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="professional">Professional</SelectItem>
                                            <SelectItem value="casual">Casual</SelectItem>
                                            <SelectItem value="humorous">Humorous</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="length"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Length</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                                        <FormControl>
                                            <SelectTrigger><SelectValue placeholder="Select a length" /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="short">Short</SelectItem>
                                            <SelectItem value="medium">Medium</SelectItem>
                                            <SelectItem value="long">Long</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                     <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Keywords</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., AI, machine learning, business" {...field} disabled={isLoading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Generate Content
                    </Button>
                </form>
            </Form>

             {(isLoading || content) && (
                 <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Generated Content</h3>
                    <Card className="bg-muted">
                        <CardContent className="p-4 min-h-[100px]">
                            {isLoading ? (
                                <div className="space-y-2">
                                    <div className="h-4 bg-foreground/10 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-full animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-2/3 animate-pulse"></div>
                                    <div className="h-4 bg-foreground/10 rounded w-full animate-pulse"></div>
                                </div>
                            ) : (
                                <pre className="whitespace-pre-wrap font-body text-sm">{content}</pre>
                            )}
                        </CardContent>
                    </Card>
                 </div>
            )}
        </CardContent>
    </Card>
  );
}
