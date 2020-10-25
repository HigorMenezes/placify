import { Request, Response } from "express";
import playlistBusiness from "../businesses/playlistBusiness";
import logger from "../utils/logger";

interface FeaturedPlaylistParams {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

const playlistController = {
  async featuredPlaylist(
    request: Request<FeaturedPlaylistParams>,
    response: Response,
  ) {
    logger.debug("[playlistController.featuredPlaylist]");

    try {
      const { access_token: accessToken } = request.cookies;
      const { locale, country, timestamp, limit, offset } = request.params;

      const featuredPlaylist = await playlistBusiness.featuredPlaylists({
        token: accessToken,
        locale,
        country,
        timestamp,
        limit,
        offset,
      });

      return response.json(featuredPlaylist);
    } catch (error) {
      logger.error("[playlistController.featuredPlaylist]", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default playlistController;
