import { Router } from "express";
import searchController from "../controllers/searchController";

const searchRoutes = Router();

searchRoutes.get("/search/albums", searchController.searchAlbums);
searchRoutes.get("/search/playlists", searchController.searchPlaylists);

export default searchRoutes;
