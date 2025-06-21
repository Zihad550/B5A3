import status from "http-status";
import { BorrowServices } from "../services/borrow.service";
import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendResponse";

const borrowBook = catchAsync(async (req, res) => {
  const data = await BorrowServices.borrowBook(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book borrowed successfully",
    data,
  });
});

const borrowedBookSummary = catchAsync(async (req, res) => {
  const data = await BorrowServices.borrowedBooksSummary();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Borrowed books summary retrieved successfully",
    data,
  });
});

export const BorrowControllers = {
  borrowBook,
  borrowedBookSummary,
};
