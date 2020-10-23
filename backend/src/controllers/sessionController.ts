import { Request, Response } from "express";
import logger from "../utils/logger";
import sessionBusiness from "../businesses/sessionBusiness";

interface CallbackRequest extends Request {
  query: {
    code?: string;
    state?: string;
    error?: string;
  };
}

const sessionController = {
  async session(request: Request, response: Response) {
    try {
      return response.redirect(sessionBusiness.authorizationUrl());
    } catch (error) {
      logger.error(error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
  async sessionCallback(request: CallbackRequest, response: Response) {
    try {
      const { code, state, error } = request.query;

      if (
        sessionBusiness.isCallbackError({
          error,
          state,
        })
      ) {
        return response.status(400).json({
          code: 400,
          message: "Access denied",
        });
      }

      const credentialResponse = await sessionBusiness.requestForCredential({
        code,
      });

      return response
        .cookie("refresh_token", credentialResponse.refresh_token, {
          httpOnly: true,
        })
        .cookie("access_token", credentialResponse.access_token, {
          maxAge: credentialResponse.expires_in * 1000,
        })
        .redirect(sessionBusiness.homePageUrl());
    } catch (error) {
      logger.error(error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default sessionController;
