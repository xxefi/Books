import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book API",
      version: "1.0.0",
      description: "API to manage books in the library",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: [path.join(__dirname, "./swagger.yaml")],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
