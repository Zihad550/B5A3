import status from "http-status";
import AppError from "../errors/AppError";
import IBorrow from "../interfaces/borrow.interface";
import Book from "../models/book.model";
import Borrow from "../models/borrow.model";

const borrowBook = async (payload: IBorrow) => {
  const book = await Book.findById(payload.book);
  if (!book) throw new AppError(status.NOT_FOUND, "Book not found");
  const availableQuantity = book.copies - payload.quantity;
  if (availableQuantity < 0)
    throw new AppError(status.NOT_FOUND, "No copies available to borrow!");

  const borrow = await Borrow.create(payload);
  await Book.findOneAndUpdate(
    {
      _id: book._id,
    },
    {
      copies: availableQuantity,
    },
  );

  if (availableQuantity === 0) await Book.markAsUnavailable(book._id);

  return borrow;
};

const borrowedBooksSummary = async () => {
  return await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "book",
        pipeline: [
          {
            $project: {
              title: 1,
              isbn: 1,
              _id: 0,
            },
          },
        ],
      },
    },
    {
      $project: {
        book: { $first: "$book" },
        totalQuantity: 1,
      },
    },
  ]);
};

export const BorrowServices = {
  borrowBook,
  borrowedBooksSummary,
};
