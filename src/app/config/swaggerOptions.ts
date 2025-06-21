import { Options } from "swagger-jsdoc";
import { version } from "../../../package.json";

const swaggerOptions: Options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "B5A3 API",
      version,
      description: "Library Management API Documentation",
    },
    servers: [
      {
        url: "http://localhost:8000/api", // Update with your server URL
      },
    ],
  },
  apis: ["./src/app/routes/*.ts"], // Path to the API docs
};
export default swaggerOptions;
