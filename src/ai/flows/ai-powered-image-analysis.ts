'use server';
/**
 * @fileOverview This file defines a Genkit flow for AI-powered image analysis of food in a fridge.
 *
 * It allows users to upload images of their fridge contents, identifies the ingredients,
 * and suggests recipes to reduce food waste.
 *
 * @exports analyzeFridgeImage - The main function to trigger the image analysis flow.
 * @exports AnalyzeFridgeImageInput - The input type for the analyzeFridgeImage function.
 * @exports AnalyzeFridgeImageOutput - The output type for the analyzeFridgeImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeFridgeImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of the food in the fridge, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
});
export type AnalyzeFridgeImageInput = z.infer<typeof AnalyzeFridgeImageInputSchema>;

const AnalyzeFridgeImageOutputSchema = z.object({
  ingredients: z.array(z.string()).describe('List of identified ingredients.'),
  suggestedRecipes: z.array(z.string()).describe('List of suggested recipes.'),
});
export type AnalyzeFridgeImageOutput = z.infer<typeof AnalyzeFridgeImageOutputSchema>;

export async function analyzeFridgeImage(input: AnalyzeFridgeImageInput): Promise<AnalyzeFridgeImageOutput> {
  return analyzeFridgeImageFlow(input);
}

const analyzeFridgeImagePrompt = ai.definePrompt({
  name: 'analyzeFridgeImagePrompt',
  input: {schema: AnalyzeFridgeImageInputSchema},
  output: {schema: AnalyzeFridgeImageOutputSchema},
  prompt: `You are a helpful assistant that analyzes images of food in a fridge and suggests recipes to reduce food waste.

  Identify the ingredients present in the following image and suggest recipes that can be made using those ingredients. Provide the list of ingredients and suggested recipes.

  Image: {{media url=photoDataUri}}
  `,
});

const analyzeFridgeImageFlow = ai.defineFlow(
  {
    name: 'analyzeFridgeImageFlow',
    inputSchema: AnalyzeFridgeImageInputSchema,
    outputSchema: AnalyzeFridgeImageOutputSchema,
  },
  async input => {
    const {output} = await analyzeFridgeImagePrompt(input);
    return output!;
  }
);
