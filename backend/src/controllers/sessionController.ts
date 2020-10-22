import { Request, Response } from "express";
import { spotifyAccountsApi } from "../configs/spotifyApi";

import { spotifyEnvironment } from "../configs/environment";

interface AccessCredentials {
  // eslint-disable-next-line camelcase
  access_token: string;
  // eslint-disable-next-line camelcase
  token_type: string;
  // eslint-disable-next-line camelcase
  expires_in: number;
  // eslint-disable-next-line camelcase
  refresh_token: string;
  scope: string;
}

const sessionController = {
  async session(request: Request, response: Response) {
    const {
      spotifyAccountsBaseUrl,
      spotifyClientId,
      spotifyReponseType,
      spotifyRedirectUri,
      spotifyState,
      spotifyScope,
    } = spotifyEnvironment;

    const authorizationUrl = new URL(`${spotifyAccountsBaseUrl}/authorize`);
    authorizationUrl.searchParams.append("client_id", spotifyClientId);
    authorizationUrl.searchParams.append("response_type", spotifyReponseType);
    authorizationUrl.searchParams.append("redirect_uri", spotifyRedirectUri);
    authorizationUrl.searchParams.append("state", spotifyState);
    authorizationUrl.searchParams.append("scope", spotifyScope);

    response.redirect(authorizationUrl.toString());
  },
  async sessionCallback(request: Request, response: Response) {
    try {
      const { code, state, error } = request.query;

      if (error || state !== spotifyEnvironment.spotifyState) {
        return response.status(400).json({
          code: 400,
          message: "Access denied",
        });
      }

      const authorizationBuffer = Buffer.from(
        `${spotifyEnvironment.spotifyClientId}:${spotifyEnvironment.spotifyClientSecret}`,
      ).toString("base64");

      const params = new URLSearchParams();
      params.append("grant_type", spotifyEnvironment.spotifyGrantType);
      params.append("code", String(code));
      params.append("redirect_uri", spotifyEnvironment.spotifyRedirectUri);

      const configs = {
        headers: {
          Authorization: `Basic ${authorizationBuffer}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      const credentialResponse = await spotifyAccountsApi.post<
        AccessCredentials
      >(`api/token`, params, configs);

      return response
        .cookie("refresh_token", credentialResponse.data.refresh_token, {
          httpOnly: true,
        })
        .cookie("access_token", credentialResponse.data.access_token, {
          expires: new Date(
            new Date().getTime() + credentialResponse.data.expires_in * 1000,
          ),
        })
        .redirect(spotifyEnvironment.spotifyRedirectHomePage);
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
