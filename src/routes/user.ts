import { Router } from "express";
import { CreateUserController } from "../Controllers/user/CreateUserController";
import { AuthUserController } from "../Controllers/user/AuthController";

export const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.post("/login", new AuthUserController().handle);
