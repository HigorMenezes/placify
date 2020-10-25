import logger from "../utils/logger";
import { spotifyApi } from "../configs/spotifyApi";

interface NewAlbums {
  token: string;
  country: string;
  limit: number;
  offset: number;
}

const albumRepository = {
  async newAlbums({ token, country, limit, offset }: NewAlbums) {
    logger.debug("[albumRepository.profile]");

    const params = new URLSearchParams();
    if (country) {
      params.append("country", country);
    }

    params.append("limit", String(limit));
    params.append("offset", String(offset));

    const {
      data: { albums: newAlbums },
    } = await spotifyApi.get("/browse/new-releases", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });

    return newAlbums;
  },
};

export default albumRepository;
