import { Router } from "express";
import albumController from "../controllers/albumController";

const albumRoutes = Router();

albumRoutes.get("/albums/new", albumController.newAlbums);

export default albumRoutes;
