/**
 * @fileOverview Types and schemas for the explain-answer AI flow.
 */
import { z } from 'zod';

export const ExplainAnswerInputSchema = z.object({
  question: z.string().describe('The quiz question that was asked.'),
  options: z.array(z.string()).describe('The multiple-choice options provided.'),
  userAnswer: z.string().describe("The answer the user selected."),
  correctAnswer: z.string().describe('The correct answer to the question.'),
  originalExplanation: z.string().describe('The original, brief explanation for the correct answer.'),
});
export type ExplainAnswerInput = z.infer<typeof ExplainAnswerInputSchema>;

export const ExplainAnswerOutputSchema = z.object({
  explanation: z.string().describe('A new, more detailed, and conversational explanation.'),
});
export type ExplainAnswerOutput = z.infer<typeof ExplainAnswerOutputSchema>;
