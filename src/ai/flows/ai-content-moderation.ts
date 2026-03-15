'use server';
/**
 * @fileOverview An AI content moderation agent.
 *
 * - moderateContent - A function that handles the content moderation process.
 * - ModerateContentInput - The input type for the moderateContent function.
 * - ModerateContentOutput - The return type for the moderateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateContentInputSchema = z.object({
  content: z.string().describe('The user-generated content to be moderated.'),
});
export type ModerateContentInput = z.infer<typeof ModerateContentInputSchema>;

const ModerateContentOutputSchema = z.object({
  flagged: z.boolean().describe('True if the content is flagged as inappropriate, false otherwise.'),
  reason: z.string().describe('If flagged, a brief explanation of why the content is inappropriate. If not flagged, this will be "Content seems appropriate."'),
  violationCategories: z.array(z.string()).describe('An array of categories of policy violations (e.g., "hate_speech", "harassment", "spam", "explicit_content"). Empty if not flagged.'),
});
export type ModerateContentOutput = z.infer<typeof ModerateContentOutputSchema>;

export async function moderateContent(input: ModerateContentInput): Promise<ModerateContentOutput> {
  return moderateContentFlow(input);
}

const moderationPrompt = ai.definePrompt({
  name: 'moderationPrompt',
  input: {schema: ModerateContentInputSchema},
  output: {schema: ModerateContentOutputSchema},
  prompt: `You are an AI content moderation assistant for a community platform called Wikidoc Occitanie.
Your task is to review user-generated content based on community guidelines and determine if it is inappropriate.
Community Guidelines:
- No hate speech, discrimination, or promotion of violence.
- No harassment, bullying, or personal attacks.
- No sexually explicit or graphic content.
- No spam, advertising, or phishing attempts.
- No illegal activities or promotion of illegal acts.
- Content must be relevant to the platform's focus (Occitanie region, culture, history, geography, events).

Evaluate the following user-generated content:

Content: {{{content}}}

Based on the guidelines, determine if the content should be flagged. If it should be flagged, provide a brief, concise reason and list all applicable violation categories (e.g., "hate_speech", "harassment", "spam", "explicit_content", "irrelevant_content"). If not flagged, state "Content seems appropriate." and leave violation categories empty.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const moderateContentFlow = ai.defineFlow(
  {
    name: 'moderateContentFlow',
    inputSchema: ModerateContentInputSchema,
    outputSchema: ModerateContentOutputSchema,
  },
  async (input) => {
    const {output} = await moderationPrompt(input);
    return output!;
  }
);
