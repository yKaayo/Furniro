import Fastify from "fastify";

// Routes
import { productsRoutes } from "./routes/productRoutes.js";

const fastify = Fastify({
  logger: true,
});

// Routes
fastify.register(productsRoutes, { prefix: "/produtos" });

export default fastify;

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
