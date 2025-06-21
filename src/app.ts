import express, { Application } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
import cors from "cors";
import router from "./app/routes/index.route";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./app/config/swaggerOptions";
import config from "./app/config";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api", router);
if (config.NODE_ENV === "development") {
  const swaggerSpec = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

app.get("/", (req, res) => {
  res.send("Welcome to library management api");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
