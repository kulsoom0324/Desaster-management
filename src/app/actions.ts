"use server";

import {
  aiChatbotLeadCapture,
  type AIChatbotLeadCaptureInput,
} from "@/ai/flows/ai-chatbot-lead-capture";
import {
  generateContent,
  type GenerateContentInput,
} from "@/ai/flows/ai-content-tool";
import {
  generateProposal,
  type AIProposalGeneratorInput,
} from "@/ai/flows/ai-proposal-generator";
import {
  aiServiceRecommender,
  type AIServiceRecommenderInput,
} from "@/ai/flows/ai-service-recommender";
import {
    aiContactFormAssistance,
    type AIContactFormAssistanceInput,
} from '@/ai/flows/ai-contact-form-assistance'

export async function handleChatbotQuery(input: AIChatbotLeadCaptureInput) {
  try {
    const response = await aiChatbotLeadCapture(input);
    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to get a response from the chatbot." };
  }
}

export async function handleGenerateContent(input: GenerateContentInput) {
  try {
    const response = await generateContent(input);
    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to generate content." };
  }
}

export async function handleGenerateProposal(input: AIProposalGeneratorInput) {
  try {
    const response = await generateProposal(input);
    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to generate proposal." };
  }
}

export async function handleRecommendService(input: AIServiceRecommenderInput) {
  try {
    const response = await aiServiceRecommender(input);
    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to recommend a service." };
  }
}

export async function handleContactAssistance(input: AIContactFormAssistanceInput) {
    try {
      const response = await aiContactFormAssistance(input);
      return { success: true, data: response };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Failed to get assistance." };
    }
  }
