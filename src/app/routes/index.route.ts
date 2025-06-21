import { Router } from "express";
import { BookRoutes } from "./book.route";
import { BorrowRoutes } from "./borrow.route";

const routes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/borrow",
    route: BorrowRoutes,
  },
];

const router = Router();

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
