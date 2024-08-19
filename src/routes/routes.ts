import { Router } from "express";
import { productsRoutes } from "./products";
import { userRoutes } from "./user";

export const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/user", userRoutes);
