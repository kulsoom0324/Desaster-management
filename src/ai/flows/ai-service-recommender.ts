// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI-powered service recommender tool.
 *
 * - aiServiceRecommender - A function that handles the service recommendation process.
 * - AIServiceRecommenderInput - The input type for the aiServiceRecommender function.
 * - AIServiceRecommenderOutput - The return type for the aiServiceRecommender function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIServiceRecommenderInputSchema = z.object({
  query: z
    .string()
    .describe('The query from the user describing their needs.'),
});
export type AIServiceRecommenderInput = z.infer<typeof AIServiceRecommenderInputSchema>;

const AIServiceRecommenderOutputSchema = z.object({
  serviceRecommendation: z.string().describe('The recommended service.'),
  explanation: z.string().describe('Explanation of how the service solves the user needs.'),
});
export type AIServiceRecommenderOutput = z.infer<typeof AIServiceRecommenderOutputSchema>;

export async function aiServiceRecommender(input: AIServiceRecommenderInput): Promise<AIServiceRecommenderOutput> {
  return aiServiceRecommenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceRecommenderPrompt',
  input: {schema: AIServiceRecommenderInputSchema},
  output: {schema: AIServiceRecommenderOutputSchema},
  prompt: `You are an AI assistant that helps recommend services to potential clients based on their needs.
  Given the following query from the user, recommend the most suitable service and explain how it addresses their needs.

  Query: {{{query}}}

  Consider services like: Web Design & Development, SEO & Marketing, and AI Automation (chatbots, workflow automation, etc.).
`,
});

const aiServiceRecommenderFlow = ai.defineFlow(
  {
    name: 'aiServiceRecommenderFlow',
    inputSchema: AIServiceRecommenderInputSchema,
    outputSchema: AIServiceRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
