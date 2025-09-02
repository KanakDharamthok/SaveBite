'use server';
/**
 * @fileOverview An AI agent to provide information about the shelf life of specific foods.
 *
 * - getShelfLife - A function that handles the shelf life information retrieval process.
 * - GetShelfLifeInput - The input type for the getShelfLife function.
 * - GetShelfLifeOutput - The return type for the getShelfLife function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetShelfLifeInputSchema = z.object({
  foodItem: z.string().describe('The name of the food item.'),
});
export type GetShelfLifeInput = z.infer<typeof GetShelfLifeInputSchema>;

const GetShelfLifeOutputSchema = z.object({
  shelfLife: z.string().describe('The shelf life information for the food item, including storage suggestions.'),
});
export type GetShelfLifeOutput = z.infer<typeof GetShelfLifeOutputSchema>;

export async function getShelfLife(input: GetShelfLifeInput): Promise<GetShelfLifeOutput> {
  return getShelfLifeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getShelfLifePrompt',
  input: {schema: GetShelfLifeInputSchema},
  output: {schema: GetShelfLifeOutputSchema},
  prompt: `You are a helpful AI assistant providing information about the shelf life of foods.

  The user will ask you about a specific food item, and you should respond with information about its shelf life, 
  including storage suggestions to maximize its freshness.

  Food Item: {{{foodItem}}}
  `,
});

const getShelfLifeFlow = ai.defineFlow(
  {
    name: 'getShelfLifeFlow',
    inputSchema: GetShelfLifeInputSchema,
    outputSchema: GetShelfLifeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
