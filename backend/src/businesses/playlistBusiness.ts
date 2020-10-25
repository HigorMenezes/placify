import playlistRepository from "../repositories/playlistRepository";
import logger from "../utils/logger";
import { sanitizePagination, sanitizePlaylist } from "../utils/sanitize";

import { Playlist } from "../types";

interface FeaturedPlaylists {
  token: string;
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

const playlistBusiness = {
  async featuredPlaylists({
    token,
    locale = "",
    country = "",
    timestamp = "",
    limit = 5,
    offset = 0,
  }: FeaturedPlaylists) {
    logger.debug("[playlistBusiness.featuredPlaylists]");
    const featuredPlaylists = await playlistRepository.featuredPlaylists({
      token,
      locale,
      country,
      timestamp,
      limit,
      offset,
    });

    const sanitizedFeaturedPlaylists = {
      message: featuredPlaylists.message,
      ...sanitizePagination(featuredPlaylists.playlists),
      playlists: featuredPlaylists.playlists.items.map((playlist: Playlist) =>
        sanitizePlaylist(playlist),
      ),
    };

    return sanitizedFeaturedPlaylists;
  },
};

export default playlistBusiness;
