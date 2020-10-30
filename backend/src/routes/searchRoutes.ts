import { Router } from "express";
import searchController from "../controllers/searchController";

const searchRoutes = Router();

searchRoutes.get("/search/albums", searchController.searchAlbums);

export default searchRoutes;
