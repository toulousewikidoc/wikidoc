'use server';

import { aiArticleAuthoringAssistant } from '@/ai/flows/ai-article-authoring-assistant';

export async function runAiAssistant(input: {
  articleContent: string;
  language?: string;
  userInstructions?: string;
}) {
  return await aiArticleAuthoringAssistant(input);
}