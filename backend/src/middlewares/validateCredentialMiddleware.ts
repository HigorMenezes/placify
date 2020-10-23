import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import sessionBusiness from "../businesses/sessionBusiness";

interface ValidateCredentialRequest extends Request {
  cookies: {
    // eslint-disable-next-line camelcase
    refresh_token?: string;
    // eslint-disable-next-line camelcase
    access_token?: string;
  };
}

async function validateCredentialMiddleware(
  request: ValidateCredentialRequest,
  response: Response,
  next: NextFunction,
) {
  logger.debug("[validateCredentialMiddleware]");
  try {
    const {
      refresh_token: refreshToken,
      access_token: accessToken,
    } = request.cookies;

    if (accessToken) {
      logger.debug(
        "[validateCredentialMiddleware]",
        "there are accessToken, returning next()",
      );
      return next();
    }

    if (refreshToken) {
      const newCredential = await sessionBusiness.refreshCredential({
        refreshToken,
      });
      response.cookie("access_token", newCredential.access_token, {
        maxAge: newCredential.expires_in * 1000,
      });

      logger.debug(
        "[validateCredentialMiddleware]",
        "refresh token:",
        newCredential,
      );
      return next();
    }

    logger.debug("[validateCredentialMiddleware]", "returning Unauthorized");
    return response.status(401).json({
      code: 401,
      message: "Unauthorized",
    });
  } catch (error) {
    logger.error("[validateCredentialMiddleware]", error);
    return response.status(500).json({
      code: 500,
      message: "Internal Server Error",
    });
  }
}

export default validateCredentialMiddleware;
