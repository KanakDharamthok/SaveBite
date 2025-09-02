'use server';

import { getShelfLife as getShelfLifeFlow, GetShelfLifeInput } from '@/ai/flows/ai-shelf-life-assistant';
import { analyzeFridgeImage as analyzeFridgeImageFlow, AnalyzeFridgeImageInput } from '@/ai/flows/ai-powered-image-analysis';
import { getAppGuidance as getAppGuidanceFlow, GetAppGuidanceInput } from '@/ai/flows/app-guide-assistant';
import { z } from 'zod';

const shelfLifeSchema = z.object({
  foodItem: z.string().min(2, "Please enter a food item."),
});

export async function getShelfLife(formData: FormData) {
  try {
    const validatedFields = shelfLifeSchema.safeParse({
      foodItem: formData.get('foodItem'),
    });

    if (!validatedFields.success) {
      return { error: 'Invalid input.' };
    }

    const input: GetShelfLifeInput = { foodItem: validatedFields.data.foodItem };
    const result = await getShelfLifeFlow(input);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'An AI error occurred. Please try again.' };
  }
}

const imageAnalysisSchema = z.object({
  photoDataUri: z.string().min(1, "Image data is required."),
});

export async function analyzeFridgeImage(formData: FormData) {
  try {
    const validatedFields = imageAnalysisSchema.safeParse({
      photoDataUri: formData.get('photoDataUri'),
    });
    
    if (!validatedFields.success) {
      return { error: 'Invalid input. No image data provided.' };
    }
    
    const input: AnalyzeFridgeImageInput = { photoDataUri: validatedFields.data.photoDataUri };
    const result = await analyzeFridgeImageFlow(input);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'An error occurred during image analysis. Please try again.' };
  }
}

const appGuidanceSchema = z.object({
  query: z.string().min(2, "Please enter a question."),
});

export async function getAppGuidance(formData: FormData) {
  try {
    const validatedFields = appGuidanceSchema.safeParse({
      query: formData.get('query'),
    });

    if (!validatedFields.success) {
      return { error: 'Invalid input.' };
    }

    const input: GetAppGuidanceInput = { query: validatedFields.data.query };
    const result = await getAppGuidanceFlow(input);
    return { data: result };
  } catch (e) {
    console.error(e);
    return { error: 'An AI error occurred. Please try again.' };
  }
}
