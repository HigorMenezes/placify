import albumRepository from "../repositories/albumRepository";
import logger from "../utils/logger";
import { sanitizeAlbum, sanitizePagination } from "../utils/sanitize";

import { Album } from "../types";

interface NewAlbums {
  token: string;
  country?: string;
  limit?: number;
  offset?: number;
}

const albumBusiness = {
  async newAlbums({ token, country = "", limit = 5, offset = 0 }: NewAlbums) {
    logger.debug("[albumBusiness.newAlbums]");
    const newAlbums = await albumRepository.newAlbums({
      token,
      country,
      limit,
      offset,
    });

    const sanitizedAlbums = {
      ...sanitizePagination(newAlbums),
      items: newAlbums.items.map((album: Album) => sanitizeAlbum(album)),
    };

    return sanitizedAlbums;
  },
};

export default albumBusiness;
