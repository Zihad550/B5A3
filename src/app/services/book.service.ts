import status from "http-status";
import AppError from "../errors/AppError";
import IBook from "../interfaces/book.interface";
import Book from "../models/book.model";

const createBookIntoDB = async (payload: IBook) => {
  const isbnConflict = await Book.find({
    isbn: payload.isbn,
  });
  if (isbnConflict?.length)
    throw new AppError(status.CONFLICT, "Conflict, ISBN already exists.");
  return await Book.create(payload);
};

const getBooksFromDB = async (req: Record<string, unknown>) => {
  const sortBy = req.sortBy as string;
  const sort = req.sort as "asc" | "desc";
  const limit = req.limit as number;
  const filter = req.filter as string;

  let query = {};
  if (filter) query = { genre: filter };
  const modelQuery = Book.find(query);
  if (sort && sortBy) modelQuery.sort({ [sortBy]: sort });
  if (limit) modelQuery.limit(limit);

  return await modelQuery;
};

const getBookByIdFromDB = async (id: string) => {
  return await Book.findOne({ _id: id });
};

const updateBookByIdIntoDB = async (id: string, payload: Partial<IBook>) => {
  if (!(await Book.isExists(id)))
    throw new AppError(status.NOT_FOUND, "Book not found");

  return await Book.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const deleteBookByIdFromDB = async (id: string) => {
  if (!(await Book.isExists(id)))
    throw new AppError(status.NOT_FOUND, "Book not found");
  await Book.deleteOne({ _id: id });
  return null;
};

export const BookServices = {
  createBookIntoDB,
  getBooksFromDB,
  getBookByIdFromDB,
  updateBookByIdIntoDB,
  deleteBookByIdFromDB,
};
