import logger from "../utils/logger";
import { spotifyApi } from "../configs/spotifyApi";

interface FeaturedPlaylists {
  token: string;
  locale: string;
  country: string;
  timestamp: string;
  limit: number;
  offset: number;
}

const playlistRepository = {
  async featuredPlaylists({
    token,
    locale,
    country,
    timestamp,
    limit,
    offset,
  }: FeaturedPlaylists) {
    logger.debug("[playlistRepository.featuredPlaylists]");

    const params = new URLSearchParams();
    if (locale) {
      params.append("locale", locale);
    }
    if (country) {
      params.append("country", country);
    }
    if (timestamp) {
      params.append("timestamp", timestamp);
    }

    params.append("limit", String(limit));
    params.append("offset", String(offset));

    const { data: featuredPlaylists } = await spotifyApi.get(
      "/browse/featured-playlists",
      {
        params,
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return featuredPlaylists;
  },
};

export default playlistRepository;
