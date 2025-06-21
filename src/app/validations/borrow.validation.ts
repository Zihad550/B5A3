import z from "zod/v4";

const createBorrowValidationSchema = z.object({
  book: z.string(),
  quantity: z.number().min(1),
  dueDate: z.date().min(new Date()),
});

export const BorrowValidations = {
  createBorrowValidationSchema,
};
