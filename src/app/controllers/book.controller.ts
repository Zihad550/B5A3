import status from "http-status";
import { BookServices } from "../services/book.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const createBook = catchAsync(async (req, res) => {
  console.log("creating a book...");
  const data = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Book created successfully",
    data,
  });
});

const getBooks = catchAsync(async (req, res) => {
  const data = await BookServices.getBooksFromDB(req.query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Books retrieved successfully",
    data,
  });
});

const getBookById = catchAsync(async (req, res) => {
  const data = await BookServices.getBookByIdFromDB(req.params.bookId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book retrieved successfully",
    data,
  });
});

const updateBookById = catchAsync(async (req, res) => {
  const data = await BookServices.updateBookByIdIntoDB(
    req.params.bookId,
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book updated successfully",
    data,
  });
});

const deleteBookById = catchAsync(async (req, res) => {
  const data = await BookServices.deleteBookByIdFromDB(req.params.bookId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book deleted successfully",
    data,
  });
});

export const BookControllers = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
