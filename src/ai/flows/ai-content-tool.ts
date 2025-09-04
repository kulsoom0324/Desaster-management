'use server';

/**
 * @fileOverview A content generation AI agent.
 *
 * - generateContent - A function that handles the content generation process.
 * - GenerateContentInput - The input type for the generateContent function.
 * - GenerateContentOutput - The return type for the generateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContentInputSchema = z.object({
  topic: z.string().describe('The topic of the content to generate.'),
  type: z.enum(['blog', 'product description']).describe('The type of content to generate.'),
  keywords: z.string().describe('Comma separated keywords to include in the content.'),
  tone: z
    .enum(['professional', 'casual', 'humorous'])
    .describe('The tone of the content.'),
  length: z
    .enum(['short', 'medium', 'long'])
    .describe('The desired length of the content.'),
});
export type GenerateContentInput = z.infer<typeof GenerateContentInputSchema>;

const GenerateContentOutputSchema = z.object({
  content: z.string().describe('The generated content.'),
});
export type GenerateContentOutput = z.infer<typeof GenerateContentOutputSchema>;

export async function generateContent(input: GenerateContentInput): Promise<GenerateContentOutput> {
  return generateContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateContentPrompt',
  input: {schema: GenerateContentInputSchema},
  output: {schema: GenerateContentOutputSchema},
  prompt: `You are an expert content writer.

You will generate content based on the topic, type, keywords, tone, and length provided.

Topic: {{{topic}}}
Type: {{{type}}}
Keywords: {{{keywords}}}
Tone: {{{tone}}}
Length: {{{length}}}

Content:`,
});

const generateContentFlow = ai.defineFlow(
  {
    name: 'generateContentFlow',
    inputSchema: GenerateContentInputSchema,
    outputSchema: GenerateContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
