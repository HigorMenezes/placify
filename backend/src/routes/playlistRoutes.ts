import { Router } from "express";
import playlistController from "../controllers/playlistController";

const playlistRoutes = Router();

playlistRoutes.get("/playlists/featured", playlistController.featuredPlaylist);

export default playlistRoutes;
