'use server';
/**
 * @fileOverview An AI assistant to help new users explore the web app.
 *
 * - getAppGuidance - A function that handles user queries about the app.
 * - GetAppGuidanceInput - The input type for the getAppGuidance function.
 * - GetAppGuidanceOutput - The return type for the getAppGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetAppGuidanceInputSchema = z.object({
  query: z.string().describe('The user\'s question about the app.'),
});
export type GetAppGuidanceInput = z.infer<typeof GetAppGuidanceInputSchema>;

const GetAppGuidanceOutputSchema = z.object({
  response: z.string().describe('The helpful response from the AI assistant.'),
});
export type GetAppGuidanceOutput = z.infer<typeof GetAppGuidanceOutputSchema>;

export async function getAppGuidance(input: GetAppGuidanceInput): Promise<GetAppGuidanceOutput> {
  return getAppGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getAppGuidancePrompt',
  input: {schema: GetAppGuidanceInputSchema},
  output: {schema: GetAppGuidanceOutputSchema},
  prompt: `You are a friendly and helpful AI assistant for the SaveBite web application, which is designed to reduce food waste.

Your goal is to guide new users and answer their questions about the app's features.

Here are the key features of the SaveBite app:
- **User Roles**: Users can sign up as a Donor, Collector, NGO, or Admin.
- **Food Listing**: Donors can list surplus food items, specifying the food type, quantity, and expiry date.
- **Reserve & Pickup**: Collectors can browse available food donations, reserve them instantly, and see pickup details.
- **Live Map**: A map shows the real-time locations of food donors and collectors to help visualize nearby opportunities.
- **AI Shelf Life Assistant**: An AI tool that provides information on how to store food and how long it will last to maximize freshness.
- **AI Image Analysis**: An AI tool that can identify ingredients from a photo of a user's fridge and suggest recipes.

When a user asks a question, provide a clear and concise answer based on these features. Be welcoming and encouraging.

User's question: {{{query}}}
`,
});

const getAppGuidanceFlow = ai.defineFlow(
  {
    name: 'getAppGuidanceFlow',
    inputSchema: GetAppGuidanceInputSchema,
    outputSchema: GetAppGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
