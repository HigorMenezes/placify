import logger from "../utils/logger";
import { spotifyApi } from "../configs/spotifyApi";

interface SearchAlbums {
  token: string;
  q: string;
  limit: number;
  offset: number;
}

const searchRepository = {
  async searchAlbums({ token, q, limit, offset }: SearchAlbums) {
    logger.debug("[searchRepository.searchAlbums]");

    const params = new URLSearchParams();

    params.append("q", q);
    params.append("limit", String(limit));
    params.append("offset", String(offset));
    params.append("type", "album");

    const { data: albums } = await spotifyApi.get("/search", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });

    return albums;
  },
};

export default searchRepository;
