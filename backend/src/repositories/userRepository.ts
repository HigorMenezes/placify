import logger from "../utils/logger";
import { spotifyApi } from "../configs/spotifyApi";

const userRepository = {
  async profile({ token }: { token: string }) {
    logger.debug("[userRepository.profile]");
    const { data: profile } = await spotifyApi.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return profile;
  },
};

export default userRepository;
