// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview AI-powered assistant for the contact form to provide immediate responses and efficiently gather necessary information.
 *
 * - aiContactFormAssistance - A function that provides AI assistance for the contact form.
 * - AIContactFormAssistanceInput - The input type for the aiContactFormAssistance function.
 * - AIContactFormAssistanceOutput - The return type for the aiContactFormAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIContactFormAssistanceInputSchema = z.object({
  userQuery: z.string().describe('The user query or message from the contact form.'),
  userName: z.string().optional().describe('The name of the user submitting the form.'),
  userEmail: z.string().email().optional().describe('The email address of the user.'),
  context: z.string().optional().describe('Any additional context or information relevant to the query.'),
});
export type AIContactFormAssistanceInput = z.infer<typeof AIContactFormAssistanceInputSchema>;

const AIContactFormAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user query.'),
  suggestedNextSteps: z.string().optional().describe('Suggested next steps for the user based on their query.'),
  relevantServices: z.string().optional().describe('List of relevant services based on the user query.'),
});
export type AIContactFormAssistanceOutput = z.infer<typeof AIContactFormAssistanceOutputSchema>;

export async function aiContactFormAssistance(input: AIContactFormAssistanceInput): Promise<AIContactFormAssistanceOutput> {
  return aiContactFormAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiContactFormAssistancePrompt',
  input: {schema: AIContactFormAssistanceInputSchema},
  output: {schema: AIContactFormAssistanceOutputSchema},
  prompt: `You are an AI assistant integrated into a web agency's contact form. Your goal is to provide immediate and helpful responses to user queries.

  Consider the following information when crafting your response:
  - User Query: {{{userQuery}}}
  - User Name: {{{userName}}}
  - User Email: {{{userEmail}}}
  - Context: {{{context}}}

  Based on the user's query, provide a concise and informative response. Suggest relevant services that the agency offers and outline potential next steps for the user.

  Format your response as follows:
  Response: [Your AI-generated response]
  Suggested Next Steps: [Suggested next steps for the user]
  Relevant Services: [List of relevant services]`, 
});

const aiContactFormAssistanceFlow = ai.defineFlow(
  {
    name: 'aiContactFormAssistanceFlow',
    inputSchema: AIContactFormAssistanceInputSchema,
    outputSchema: AIContactFormAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
