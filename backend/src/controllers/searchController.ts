import { Request, Response } from "express";
import searchBusiness from "../businesses/searchBusiness";
import logger from "../utils/logger";

interface SearchAlbumsRequest extends Request {
  query: {
    q?: string;
    limit?: string;
    offset?: string;
  };
}

const searchController = {
  async searchAlbums(request: SearchAlbumsRequest, response: Response) {
    logger.debug("[searchController.searchAlbums]");

    try {
      const { access_token: accessToken } = request.cookies;
      const { q, limit, offset } = request.query;

      if (!q) {
        logger.info("[searchController.searchAlbums]", "Bad request");
        return response.status(400).json({
          code: 400,
          message: "Bad Request",
        });
      }

      const searchAlbums = await searchBusiness.searchAlbums({
        token: accessToken,
        q,
        limit,
        offset,
      });

      return response.json(searchAlbums);
    } catch (error) {
      logger.error("[searchController.searchAlbums]", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default searchController;
