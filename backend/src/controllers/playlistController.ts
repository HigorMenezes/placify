import { Request, Response } from "express";
import playlistBusiness from "../businesses/playlistBusiness";
import logger from "../utils/logger";

interface FeaturedPlaylistRequest extends Request {
  query: {
    locale?: string;
    country?: string;
    timestamp?: string;
    limit?: string;
    offset?: string;
  };
}

const playlistController = {
  async featuredPlaylist(request: FeaturedPlaylistRequest, response: Response) {
    logger.debug("[playlistController.featuredPlaylist]");

    try {
      const { access_token: accessToken } = request.cookies;
      const { locale, country, timestamp, limit, offset } = request.query;

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
