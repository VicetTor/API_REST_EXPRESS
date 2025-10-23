import { z } from 'zod'

export const createQuestionSchema = z.object({
    questionText: z
        .string()
        .min(1)
        .max(255, 'Question text must be at most 255 characters'),
    answer: z
        .string()
        .min(1)
        .max(255, 'Answer text must be at most 255 characters'),
    difficulty: z
        .enum(["easy","medium","difficult"]), 
})

export const questionIdSchema = z.object({
    id: z.uuid(),
})
