// Controllers
import {
  getProducts,
  createProducts,
} from "../controllers/productController.js";
import {} from "../controllers/userController.js";

export async function productsRoutes(fastify) {
  fastify.get("/", getProducts);
  fastify.post("/criar", createProducts);
}
