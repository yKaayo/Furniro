import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster.krnbot3.mongodb.net/?retryWrites=true&w=majority&appName=cluster`
  )

// Routes
import { productsRoutes } from "./routes/productRoutes.js";

const fastify = Fastify({
  logger: true,
});

// Routes
fastify.register(productsRoutes, { prefix: "/produtos" });

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
