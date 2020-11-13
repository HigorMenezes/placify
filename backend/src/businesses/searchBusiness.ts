import searchRepository from "../repositories/searchRepository";
import logger from "../utils/logger";
import { sanitizePagination, sanitizeAlbum } from "../utils/sanitize";

import { Album } from "../types";

interface SearchAlbums {
  token: string;
  q: string;
  limit?: string;
  offset?: string;
}

const searchBusiness = {
  async searchAlbums({ token, q, limit, offset }: SearchAlbums) {
    logger.debug("[searchBusiness.searchAlbums]");
    const searchAlbums = await searchRepository.search({
      token,
      q,
      limit: limit ? Number(limit) : 5,
      offset: offset ? Number(offset) : 0,
      type: "album",
    });

    const sanitizedSearchAlbums = {
      message: searchAlbums.message,
      ...sanitizePagination(searchAlbums.albums),
      albums: searchAlbums.albums.items.map((album: Album) =>
        sanitizeAlbum(album),
      ),
    };

    return sanitizedSearchAlbums;
  },
};

export default searchBusiness;
