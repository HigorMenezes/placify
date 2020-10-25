import userRepository from "../repositories/userRepository";
import logger from "../utils/logger";

const userBusiness = {
  async profile({ token }: { token: string }) {
    logger.debug("[userBusiness.profile]");
    const profile = await userRepository.profile({ token });

    const sanitizedProfile = {
      id: profile.id ?? 0,
      name: profile?.display_name ?? "",
      email: profile?.email ?? "",
      followers: profile?.followers?.total ?? 0,
      spotifyUrl: profile?.external_urls?.spotify ?? "",
      images: profile?.images,
    };

    return sanitizedProfile;
  },
};

export default userBusiness;
