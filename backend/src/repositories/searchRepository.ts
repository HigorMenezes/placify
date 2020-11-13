import logger from "../utils/logger";
import { spotifyApi } from "../configs/spotifyApi";

interface Search {
  token: string;
  q: string;
  limit: number;
  offset: number;
  type: string;
}

const searchRepository = {
  async search({ token, q, limit, offset, type }: Search) {
    logger.debug("[searchRepository.search]");

    const params = new URLSearchParams();

    params.append("q", q);
    params.append("limit", String(limit));
    params.append("offset", String(offset));
    params.append("type", type);

    const { data: searchResult } = await spotifyApi.get("/search", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });

    return searchResult;
  },
};

export default searchRepository;
