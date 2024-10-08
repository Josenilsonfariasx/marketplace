import { Router } from "express";
import multer from "multer";
import { CreateProductsController } from "../Controllers/products/CreateProductsController";
import { GetProductByIdController } from "../Controllers/products/GetProductByIdController";
import { GetAllProductsController } from "../Controllers/products/GetAllProductsController";
import { DeleteProductsController } from "../Controllers/products/DeleteProductsController";
import { UpdateProductController } from "../Controllers/products/UpdateProductController";
import { isAuthenticated } from "../middlewares/IsAuthenticated";

const upload = multer({ dest: "uploads/" });

export const productsRoutes = Router();

productsRoutes.post("/", isAuthenticated, upload.single("image"), new CreateProductsController().handle);
productsRoutes.get("/:id", new GetProductByIdController().handle);
productsRoutes.get("/", new GetAllProductsController().handle);
productsRoutes.delete("/:id", isAuthenticated, new DeleteProductsController().handle);
productsRoutes.put("/:id", isAuthenticated, new UpdateProductController().handle);
