import { Router } from "express";
import userController from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/users/profile", userController.profile);

export default userRoutes;
