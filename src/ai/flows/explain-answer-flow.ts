'use server';
/**
 * @fileOverview An AI flow for explaining quiz answers.
 *
 * - explainAnswer - A function that provides a detailed explanation for a quiz answer.
 */

import { ai } from '@/ai/genkit';
import { ExplainAnswerInputSchema, ExplainAnswerOutputSchema, type ExplainAnswerInput } from './explain-answer-types';

export async function explainAnswer(input: ExplainAnswerInput): Promise<{ explanation: string }> {
  return explainAnswerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainAnswerPrompt',
  input: { schema: ExplainAnswerInputSchema },
  output: { schema: ExplainAnswerOutputSchema },
  prompt: `
    You are a friendly and encouraging financial literacy coach. 
    A user is reviewing their quiz answers and has asked for a better explanation.

    Here is the quiz information:
    - Question: "{{question}}"
    - Their Answer: "{{userAnswer}}"
    - Correct Answer: "{{correctAnswer}}"
    - The original explanation was: "{{originalExplanation}}"

    Your task is to provide a new, more conversational, and helpful explanation.

    - If the user's answer was correct, start by congratulating them.
    - If the user's answer was incorrect, be encouraging. Explain *why* their answer was wrong and *why* the correct answer is right.
    - Elaborate on the original explanation. Provide more context or a simple, real-world example to make the concept easier to understand.
    - Keep your tone positive and supportive. Address the user directly.
    - Format the output as a single block of text. Do not use markdown.
  `,
});

const explainAnswerFlow = ai.defineFlow(
  {
    name: 'explainAnswerFlow',
    inputSchema: ExplainAnswerInputSchema,
    outputSchema: ExplainAnswerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
