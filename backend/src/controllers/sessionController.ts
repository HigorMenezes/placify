import { Request, Response } from "express";
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
    response.redirect(sessionBusiness.authorizationUrl());
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

      const credentialResponse = await sessionBusiness.requestForCredentials({
        code,
      });

      return response
        .cookie("refresh_token", credentialResponse.refresh_token, {
          httpOnly: true,
        })
        .cookie("access_token", credentialResponse.access_token, {
          expires: new Date(
            new Date().getTime() + credentialResponse.expires_in * 1000,
          ),
        })
        .redirect(sessionBusiness.homePageUrl());
    } catch (error) {
      console.error("Error:", error);
      return response.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  },
};

export default sessionController;
