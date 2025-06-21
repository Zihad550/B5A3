import z from "zod/v4";
import { BookGenres } from "../constants/book.constant";

const createBookValidationSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.enum(BookGenres),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.number().positive(),
  available: z.boolean().default(true),
});

const updateBookValidationSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z.enum(BookGenres).optional(),
  isbn: z.string().optional(),
  description: z.string().optional(),
  copies: z.number().min(0).optional(),
  available: z.boolean().optional(),
});

export const BookValidations = {
  createBookValidationSchema,
  updateBookValidationSchema,
};
