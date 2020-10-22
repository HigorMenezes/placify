import { Router } from "express";
import sessionController from "../controllers/sessionController";

const sessionRoutes = Router();

sessionRoutes.get("/session", sessionController.session);
sessionRoutes.get("/session-callback", sessionController.sessionCallback);

export default sessionRoutes;
