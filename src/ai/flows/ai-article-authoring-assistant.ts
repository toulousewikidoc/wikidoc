'use server';
/**
 * @fileOverview An AI assistant that helps article authors by suggesting a concise summary, relevant themes, and a unique slug based on the article content.
 *
 * - aiArticleAuthoringAssistant - A function that processes article content to generate a summary, themes, and a slug.
 * - AiArticleAuthoringAssistantInput - The input type for the aiArticleAuthoringAssistant function.
 * - AiArticleAuthoringAssistantOutput - The return type for the aiArticleAuthoringAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiArticleAuthoringAssistantInputSchema = z.object({
  articleContent: z.string().describe('The full content of the article.'),
  language: z.string().optional().describe('The intended language of the article (e.g., fr, oc, en, es, ca, eu).'),
  userInstructions: z.string().optional().describe('Additional instructions or context provided by the user to guide the AI analysis.'),
});
export type AiArticleAuthoringAssistantInput = z.infer<typeof AiArticleAuthoringAssistantInputSchema>;

const AiArticleAuthoringAssistantOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the article content.'),
  themes: z.array(z.string()).describe('An array of relevant themes or categories for the article.'),
  slug: z
    .string()
    .describe(
      'A unique, URL-friendly slug generated from the article title or main content. It should be lowercase, separated by hyphens, and contain only alphanumeric characters and hyphens.'
    ),
});
export type AiArticleAuthoringAssistantOutput = z.infer<typeof AiArticleAuthoringAssistantOutputSchema>;

export async function aiArticleAuthoringAssistant(
  input: AiArticleAuthoringAssistantInput
): Promise<AiArticleAuthoringAssistantOutput> {
  return aiArticleAuthoringAssistantFlow(input);
}

const aiArticleAuthoringAssistantPrompt = ai.definePrompt({
  name: 'aiArticleAuthoringAssistantPrompt',
  input: { schema: AiArticleAuthoringAssistantInputSchema },
  output: { schema: AiArticleAuthoringAssistantOutputSchema },
  prompt: `You are an AI assistant designed to help article authors streamline their publishing process. Your task is to analyze the provided article content and generate a concise summary, an array of relevant themes/categories, and a unique, URL-friendly slug.

IMPORTANT: Generate the summary and themes in the same language as the article content. If the language is specified as '{{language}}', please respect it. Supported codes are fr (French), oc (Occitan), en (English), es (Spanish), ca (Catalan), eu (Basque).

Here is the article content:

{{articleContent}}

{{#if userInstructions}}
The user has provided the following additional instructions to guide your analysis:
"{{{userInstructions}}}"
Please strictly follow these instructions while generating the output.
{{/if}}

Based on the content and any additional instructions, please provide the following:
1. A concise summary that captures the main idea of the article (in the same language as the content).
2. An array of up to 5 relevant themes or categories (in the same language as the content). Themes should be general, like 'Histoire', 'Géographie', 'Nature', 'Urbanisme', 'Culture', 'Sociologie', 'Événements', etc.
3. A unique, URL-friendly slug. This slug should be lowercase, words separated by hyphens, and contain only alphanumeric characters and hyphens.
`,
});

const aiArticleAuthoringAssistantFlow = ai.defineFlow(
  {
    name: 'aiArticleAuthoringAssistantFlow',
    inputSchema: AiArticleAuthoringAssistantInputSchema,
    outputSchema: AiArticleAuthoringAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await aiArticleAuthoringAssistantPrompt(input);
    return output!;
  }
);
