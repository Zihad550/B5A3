import express, { Application } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
import cors from "cors";
import router from "./app/routes/index.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to library management api");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
