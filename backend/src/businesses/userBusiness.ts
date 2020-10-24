import userRepository from "../repositories/userRepository";
import logger from "../utils/logger";

const userBusiness = {
  async profile({ token }: { token: string }) {
    logger.debug("[userBusiness.profile]");
    const profile = await userRepository.profile({ token });

    logger.debug("[userBusiness.profile]", "returning:", profile);
    return profile;
  },
};

export default userBusiness;
