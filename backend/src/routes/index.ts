import { Router } from "express";

import validateCredentialMiddleware from "../middlewares/validateCredentialMiddleware";

import sessionRoutes from "./sessionRoutes";
import userRoutes from "./userRoutes";
import albumRoutes from "./albumRoutes";
import playlistRoutes from "./playlistRoutes";
import searchRoutes from "./searchRoutes";

const routes = Router();

routes.use(sessionRoutes);
routes.use(validateCredentialMiddleware);
routes.use(userRoutes);
routes.use(albumRoutes);
routes.use(playlistRoutes);
routes.use(searchRoutes);

export default routes;
