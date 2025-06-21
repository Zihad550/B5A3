import { Router } from "express";
import { BookControllers } from "../controllers/book.controller";

const router = Router();
/**
 * @openapi
 * /books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books in the library.
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: The title of the book.
 *                       author:
 *                         type: string
 *                         description: The author of the book.
 *                       genre:
 *                         type: string
 *                         description: The genre of the book.
 *                       isbn:
 *                         type: string
 *                         description: The ISBN of the book.
 *                       description:
 *                         type: string
 *                         description: A brief description of the book.
 *                       copies:
 *                         type: number
 *                         description: The number of copies of the book.
 *                       available:
 *                         type: boolean
 *                         description: Whether the book is currently available.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */
router.get("/", BookControllers.getBooks);

/**
 * @openapi
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Creates a new book in the library.
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the book.
 *               author:
 *                 type: string
 *                 description: The author of the book.
 *               genre:
 *                 type: string
 *                 enum:
 *                   - BIOGRAPHY
 *                   - FANTASY
 *                   - FICTION
 *                   - HISTORY
 *                   - NON_FICTION
 *                   - SCIENCE
 *                 description: The genre of the book.
 *               isbn:
 *                 type: string
 *                 description: The ISBN of the book.
 *               description:
 *                 type: string
 *                 nullable: true
 *                 description: A brief description of the book.
 *               copies:
 *                 type: number
 *                 description: The number of copies of the book.
 *               available:
 *                 type: boolean
 *                 description: Whether the book is currently available.
 *             example:
 *               title: "The Lord of the Rings"
 *               author: "J.R.R. Tolkien"
 *               genre: "FANTASY"
 *               isbn: "978-0618260264"
 *               description: "An epic high-fantasy novel."
 *               copies: 5
 *               available: true
 *     responses:
 *       201:
 *         description: Book created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                 data:
 *                   type: object
 *                   example:
 *                     title: "The Lord of the Rings"
 *                     author: "J.R.R. Tolkien"
 *                     genre: "FANTASY"
 *                     isbn: "978-0618260264"
 *                     description: "An epic high-fantasy novel."
 *                     copies: 5
 *                     available: true
 *       409:
 *         description: Conflict, ISBN already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   default: false
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */
router.post("/", BookControllers.createBook);
/**
 * @openapi
 * /books/{bookId}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a specific book from the library using its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to retrieve.
 *     responses:
 *       200:
 *         description: The requested book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The title of the book.
 *                     author:
 *                       type: string
 *                       description: The author of the book.
 *                     genre:
 *                       type: string
 *                       description: The genre of the book.
 *                     isbn:
 *                       type: string
 *                       description: The ISBN of the book.
 *                     description:
 *                       type: string
 *                       description: A brief description of the book.
 *                     copies:
 *                       type: number
 *                       description: The number of copies of the book.
 *                     available:
 *                       type: boolean
 *                       description: Whether the book is currently available.
 *       404:
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

router.get("/:bookId", BookControllers.getBookById);
/**
 * @openapi
 * /books/{bookId}:
 *   put:
 *     summary: Update a book by ID
 *     description: Update a specific book in the library using its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the book.
 *               author:
 *                 type: string
 *                 description: The author of the book.
 *               genre:
 *                 type: string
 *                 enum:
 *                   - BIOGRAPHY
 *                   - FANTASY
 *                   - FICTION
 *                   - HISTORY
 *                   - NON_FICTION
 *                   - SCIENCE
 *                 description: The genre of the book.
 *               isbn:
 *                 type: string
 *                 description: The ISBN of the book.
 *               description:
 *                 type: string
 *                 nullable: true
 *                 description: A brief description of the book.
 *               copies:
 *                 type: number
 *                 description: The number of copies of the book.
 *               available:
 *                 type: boolean
 *                 description: Whether the book is currently available.
 *             example:
 *               title: "The Lord of the Rings"
 *               author: "J.R.R. Tolkien"
 *               genre: "FANTASY"
 *               isbn: "978-0618260264"
 *               description: "An epic high-fantasy novel."
 *               copies: 5
 *               available: true
 *     responses:
 *       200:
 *         description: Book updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: any
 *       400:
 *         description: Invalid request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: string
 *       404:
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

router.put("/:bookId", BookControllers.updateBookById);
/**
 * @openapi
 * /books/{bookId}:
 *   delete:
 *     summary: Delete a book by ID
 *     description: Delete a specific book from the library using its ID.
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the book to delete.
 *     responses:
 *       200:
 *         description: Book deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message.
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: any
 *       404:
 *         description: Book not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: boolean
 *                    default: false
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */
router.delete("/:bookId", BookControllers.deleteBookById);

export const BookRoutes = router;
