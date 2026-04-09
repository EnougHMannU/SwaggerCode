const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Swagger Documentation",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./Router/*.js"], // yaha se comments read honge
};

const swaggerSpec = swaggerJsdoc(options);

// function export karo
const swaggerDocs = (app) => {
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;