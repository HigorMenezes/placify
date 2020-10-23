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
    logger.debug("[sessionController.session]");

    try {
      logger.debug("[sessionController.session]", "Redirecting response");
      return response.redirect(sessionBusiness.authorizationUrl());
    } catch (error) {
      logger.error("[sessionController.session]", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
  async sessionCallback(request: CallbackRequest, response: Response) {
    logger.debug("[sessionController.sessionCallback]");

    try {
      const { code, state, error } = request.query;

      if (
        sessionBusiness.isCallbackError({
          error,
          state,
        })
      ) {
        logger.debug("[sessionController.sessionCallback]", "Access denied");
        return response.status(400).json({
          code: 400,
          message: "Access denied",
        });
      }

      const credentialResponse = await sessionBusiness.requestForCredential({
        code,
      });

      logger.debug(
        "[sessionController.sessionCallback]",
        "Redirect to home page with refresh_token and access_token in header",
      );
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
