import { Request, Response } from "express";
import albumBusiness from "../businesses/albumBusiness";
import logger from "../utils/logger";

interface NewAlbumsRequest extends Request {
  query: {
    country?: string;
    limit?: string;
    offset?: string;
  };
}

const albumController = {
  async newAlbums(request: NewAlbumsRequest, response: Response) {
    logger.debug("[albumController.newAlbums]");

    try {
      const { access_token: accessToken } = request.cookies;
      const { country, limit, offset } = request.query;

      const newAlbums = await albumBusiness.newAlbums({
        token: accessToken,
        country,
        limit,
        offset,
      });

      return response.json(newAlbums);
    } catch (error) {
      logger.error("[albumController.newAlbums]", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default albumController;
