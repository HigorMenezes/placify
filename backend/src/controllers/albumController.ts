import { Request, Response } from "express";
import albumBusiness from "../businesses/albumBusiness";
import logger from "../utils/logger";

interface NewAlbumsParams {
  country?: string;
  limit?: number;
  offset?: number;
}

const albumController = {
  async newAlbums(request: Request<NewAlbumsParams>, response: Response) {
    logger.debug("[albumController.newAlbums]");

    try {
      const { access_token: accessToken } = request.cookies;
      const { country, limit, offset } = request.params;

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
