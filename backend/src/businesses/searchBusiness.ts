import searchRepository from "../repositories/searchRepository";
import logger from "../utils/logger";
import {
  sanitizePagination,
  sanitizeAlbum,
  sanitizePlaylist,
} from "../utils/sanitize";

import { Album, Playlist } from "../types";

interface Search {
  token: string;
  q: string;
  limit?: string;
  offset?: string;
}

const searchBusiness = {
  async searchAlbums({ token, q, limit, offset }: Search) {
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
  async searchPlaylists({ token, q, limit, offset }: Search) {
    logger.debug("[searchBusiness.searchPlaylists]");
    const searchPlaylists = await searchRepository.search({
      token,
      q,
      limit: limit ? Number(limit) : 5,
      offset: offset ? Number(offset) : 0,
      type: "playlist",
    });

    const sanitizedSearchPlaylists = {
      message: searchPlaylists.message,
      ...sanitizePagination(searchPlaylists.playlists),
      playlists: searchPlaylists.playlists.items.map((playlist: Playlist) =>
        sanitizePlaylist(playlist),
      ),
    };

    return sanitizedSearchPlaylists;
  },
};

export default searchBusiness;
