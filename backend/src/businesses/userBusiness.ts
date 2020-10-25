import userRepository from "../repositories/userRepository";
import { sanitizeProfile } from "../utils/sanitize";
import logger from "../utils/logger";

const userBusiness = {
  async profile({ token }: { token: string }) {
    logger.debug("[userBusiness.profile]");
    const profile = await userRepository.profile({ token });

    const sanitizedProfile = sanitizeProfile(profile);

    return sanitizedProfile;
  },
};

export default userBusiness;
