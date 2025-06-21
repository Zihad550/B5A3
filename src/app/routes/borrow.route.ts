import { Router } from "express";
import { BorrowControllers } from "../controllers/borrow.controller";

const router = Router();

router.post("/", BorrowControllers.borrowBook);
router.get("/", BorrowControllers.borrowedBookSummary);

export const BorrowRoutes = router;
