import { Request, Response } from "express";
import userBusiness from "../businesses/userBusiness";
import logger from "../utils/logger";

const userController = {
  async profile(request: Request, response: Response) {
    logger.debug("[userController.profile]");

    try {
      const { access_token: accessToken } = request.cookies;
      const profile = await userBusiness.profile({ token: accessToken });

      return response.json(profile);
    } catch (error) {
      logger.error("[userController.profile]", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default userController;
