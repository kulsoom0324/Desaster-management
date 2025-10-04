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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import { handleContactAssistance } from "@/app/actions";
import { useDebounce } from "@/hooks/use-debounce";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;


export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const messageValue = form.watch("message");
  
  const debouncedMessage = useDebounce(messageValue, 1000);

  useState(() => {
    async function getAssistance() {
        if (debouncedMessage && debouncedMessage.length > 20) {
            setIsAiLoading(true);
            setAiResponse(null);
            const result = await handleContactAssistance({ userQuery: debouncedMessage });
            if (result.success && result.data) {
                setAiResponse(result.data.response);
            }
            setIsAiLoading(false);
        }
    }
    getAssistance();
  }, [debouncedMessage]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll be in touch shortly.",
      });
      form.reset();
      setAiResponse(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Contact Us</h2>
            <p className="text-muted-foreground font-body mb-8">
              Have a question or want to request a demo of our platform? Fill out the form, and our team will get back to you. For urgent matters, please use our 24/7 support line.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Inquiry Form</CardTitle>
                    <CardDescription>We typically respond within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                                 <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your@email.com" {...field} /></FormControl><FormMessage /></FormItem>
                                )}/>
                            </div>
                            <FormField control={form.control} name="message" render={({ field }) => (
                                <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="How can we help you?" {...field} rows={5} /></FormControl><FormMessage /></FormItem>
                            )}/>
                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Button variant="outline" asChild className="w-full text-lg p-6 bg-red-600 text-white hover:bg-red-700 hover:text-white">
                <Link href="tel:1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> 24/7 Emergency Support
                </Link>
            </Button>
            
            <div className="h-[28rem]">
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle>AI Assistant</CardTitle>
                        <CardDescription>As you type, our AI provides instant information.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        {isAiLoading ? (
                             <div className="space-y-2 pt-4">
                                <div className="h-4 bg-foreground/10 rounded w-3/4 animate-pulse"></div>
                                <div className="h-4 bg-foreground/10 rounded w-full animate-pulse"></div>
                                <div className="h-4 bg-foreground/10 rounded w-2/3 animate-pulse"></div>
                            </div>
                        ) : aiResponse ? (
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{aiResponse}</p>
                        ) : (
                            <div className="text-center text-sm text-muted-foreground pt-10">
                                <p>Start typing your question to get instant information...</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
