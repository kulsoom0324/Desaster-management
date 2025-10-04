"use server";

import {
    aiContactFormAssistance,
    type AIContactFormAssistanceInput,
} from '@/ai/flows/ai-contact-form-assistance'


export async function handleContactAssistance(input: AIContactFormAssistanceInput) {
    try {
      const response = await aiContactFormAssistance(input);
      return { success: true, data: response };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to get assistance." };
    }
  }
