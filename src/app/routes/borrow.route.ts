import { Router } from "express";
import { BorrowControllers } from "../controllers/borrow.controller";

const router = Router();
/**
 * @openapi
 * /borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Borrow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               book:
 *                 type: string
 *                 description: The ID of the book to borrow
 *               quantity:
 *                 type: number
 *                 description: The quantity of books to borrow
 *                 default: 1
 *               dueDate:
 *                 type: string
 *                 format: date
 *                 description: The due date for the borrowed book(s)
 *     responses:
 *       201:
 *         description: Book borrowed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Book borrowed successfully
 *                 data:
 *                   type: object
 *                   example: {
 *                     bookId: "65b7a5b594aa96e797c477b5",
 *                     quantity: 1,
 *                     dueDate: "2024-02-29T00:00:00.000Z"
 *                   }
 *       400:
 *         description: Bad Request - Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: Invalid input data
 *                 error:
 *                   type: any
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Book not found
 *                 error:
 *                   type: any
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: Internal server error
 *                 error:
 *                   type: any
 *   get:
 *     summary: Get a summary of borrowed books
 *     tags: [Borrow]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Successfully retrieved borrowed books summary
 *                 data:
 *                   type: array
 *                   example:
 *                     [
 *                       {
 *                         "book": {
 *                            "title": "book title",
 *                            "isbn": "123433433",
 *                          },
 *                         "quantity": 2,
 *                       }
 *                     ]
 *                   items:
 *                     type: object
 *                     properties:
 *                       book:
 *                         type: string
 *                         description: Book ID
 *                       quantity:
 *                         type: number
 *                         description: Borrowed quantity
 *                       dueDate:
 *                         type: string
 *                         format: date
 *                         description: Due date
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: Internal server error
 *                 error:
 *                   type: any
 */
router.post("/", BorrowControllers.borrowBook);

router.get("/", BorrowControllers.borrowedBookSummary);
export const BorrowRoutes = router;
