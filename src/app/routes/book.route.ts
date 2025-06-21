import { Router } from "express";
import { BookControllers } from "../controllers/book.controller";

const router = Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getBooks);
router.get("/:bookId", BookControllers.getBookById);
router.put("/:bookId", BookControllers.updateBookById);
router.delete("/:bookId", BookControllers.deleteBookById);

export const BookRoutes = router;
