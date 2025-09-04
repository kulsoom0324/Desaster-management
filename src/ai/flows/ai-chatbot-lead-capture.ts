'use server';
/**
 * @fileOverview Implements an AI chatbot to capture leads by answering visitor questions and collecting emails.
 *
 * - aiChatbotLeadCapture - A function that handles the chatbot interaction and lead capture.
 * - AIChatbotLeadCaptureInput - The input type for the aiChatbotLeadCapture function.
 * - AIChatbotLeadCaptureOutput - The return type for the aiChatbotLeadCapture function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotLeadCaptureInputSchema = z.object({
  query: z.string().describe('The user query or question for the chatbot.'),
  email: z.string().email().optional().describe('The user email address.'),
});
export type AIChatbotLeadCaptureInput = z.infer<typeof AIChatbotLeadCaptureInputSchema>;

const AIChatbotLeadCaptureOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
  needsEmail: z.boolean().describe('Indicates if the chatbot needs the user email address.'),
});
export type AIChatbotLeadCaptureOutput = z.infer<typeof AIChatbotLeadCaptureOutputSchema>;

export async function aiChatbotLeadCapture(input: AIChatbotLeadCaptureInput): Promise<AIChatbotLeadCaptureOutput> {
  return aiChatbotLeadCaptureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotLeadCapturePrompt',
  input: {schema: AIChatbotLeadCaptureInputSchema},
  output: {schema: AIChatbotLeadCaptureOutputSchema},
  prompt: `You are a chatbot on a web agency website. Your job is to answer questions about the agency's services and collect the user's email address for follow-up.

  The agency specializes in Next.js, WordPress, AI, and SEO.

  If the user asks a question about the agency's services, answer it clearly and concisely. If you don't have enough information, ask for clarification.

  If you already have the user's email address, thank them for providing it. If you don't have the user's email address, ask for it politely after answering their question.

  Here's the user's query: {{{query}}}

  {{#if email}}
  Thank you for providing your email address: {{{email}}}.
  {{/if}}

  {{#unless email}}
  May I have your email address so we can follow up with you?
  {{/unless}}

  Based on the conversation, determine if you still need the user's email address and set the needsEmail field accordingly.
  `,
});

const aiChatbotLeadCaptureFlow = ai.defineFlow(
  {
    name: 'aiChatbotLeadCaptureFlow',
    inputSchema: AIChatbotLeadCaptureInputSchema,
    outputSchema: AIChatbotLeadCaptureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
