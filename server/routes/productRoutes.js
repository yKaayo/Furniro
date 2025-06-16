// Controllers
import {
  getProducts,
  createProducts,
} from "../controllers/productController.js";
import {} from "../controllers/userController.js";

// Middlewares
import exampleMiddleware from "../middlewares/exampleMiddleware.js";

export async function productsRoutes(fastify) {
  fastify.route({
    method: "GET",
    url: "/",
    handler: async (req, rep) => {
      return getProducts;
    },
    preHandler: exampleMiddleware,
  });
  fastify.post("/criar", createProducts);
}
