'use server';

/**
 * @fileOverview An AI proposal generator flow.
 *
 * - generateProposal - A function that generates a project proposal with cost estimates.
 * - AIProposalGeneratorInput - The input type for the generateProposal function.
 * - AIProposalGeneratorOutput - The return type for the generateProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProposalGeneratorInputSchema = z.object({
  projectType: z
    .string()
    .describe('The type of project (e.g., website, e-commerce, landing page).'),
  budget: z.string().describe('The budget for the project.'),
  features: z
    .string()
    .describe('A list of desired features for the project, comma separated.'),
});

export type AIProposalGeneratorInput = z.infer<typeof AIProposalGeneratorInputSchema>;

const AIProposalGeneratorOutputSchema = z.object({
  proposal: z.string().describe('A detailed project proposal with cost estimates.'),
});

export type AIProposalGeneratorOutput = z.infer<typeof AIProposalGeneratorOutputSchema>;

export async function generateProposal(input: AIProposalGeneratorInput): Promise<AIProposalGeneratorOutput> {
  return generateProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProposalGeneratorPrompt',
  input: {schema: AIProposalGeneratorInputSchema},
  output: {schema: AIProposalGeneratorOutputSchema},
  prompt: `You are an AI proposal generator for a web agency.

You will generate a project proposal with cost estimates based on the following information:

Project Type: {{{projectType}}}
Budget: {{{budget}}}
Features: {{{features}}}

Provide a detailed proposal including estimated costs for each feature and an overall project cost.

Format the output as a professional proposal document.
`, 
});

const generateProposalFlow = ai.defineFlow(
  {
    name: 'generateProposalFlow',
    inputSchema: AIProposalGeneratorInputSchema,
    outputSchema: AIProposalGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
