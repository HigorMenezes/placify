import albumRepository from "../repositories/albumRepository";
import logger from "../utils/logger";
import { sanitizeAlbum, sanitizePagination } from "../utils/sanitize";

import { Album } from "../types";

interface NewAlbums {
  token: string;
  country?: string;
  limit?: string;
  offset?: string;
}

const albumBusiness = {
  async newAlbums({ token, country = "", limit, offset }: NewAlbums) {
    logger.debug("[albumBusiness.newAlbums]");
    const newAlbums = await albumRepository.newAlbums({
      token,
      country,
      limit: limit ? Number(limit) : 5,
      offset: offset ? Number(offset) : 0,
    });

    const sanitizedAlbums = {
      ...sanitizePagination(newAlbums),
      albums: newAlbums.items.map((album: Album) => sanitizeAlbum(album)),
    };

    return sanitizedAlbums;
  },
};

export default albumBusiness;
