import sessionRepository from "../repositories/sessionRepository";
import logger from "../utils/logger";
import { spotifyEnvironment } from "../configs/environment";

const sessionBusiness = {
  authorizationUrl() {
    logger.debug("[sessionBusiness.authorizationUrl]");
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

    return authorizationUrl.toString();
  },
  isCallbackError({ error, state }: { error?: string; state?: string }) {
    logger.debug("[sessionBusiness.isCallbackError]");
    return Boolean(error || state !== spotifyEnvironment.spotifyState);
  },
  authorizationBuffer() {
    logger.debug("[sessionBusiness.authorizationBuffer]");

    return Buffer.from(
      `${spotifyEnvironment.spotifyClientId}:${spotifyEnvironment.spotifyClientSecret}`,
    ).toString("base64");
  },
  homePageUrl() {
    logger.debug("[sessionBusiness.homePageUrl]");
    return spotifyEnvironment.spotifyRedirectHomePage;
  },
  credentialRequestConfigs() {
    logger.debug("[sessionBusiness.credentialRequestConfigs]");

    const credentialConfigs = {
      headers: {
        Authorization: `Basic ${this.authorizationBuffer()}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    return credentialConfigs;
  },
  async requestForCredential({ code }: { code?: string }) {
    logger.debug("[sessionBusiness.credentialRequestConfigs]");

    const configs = this.credentialRequestConfigs();

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code ?? "");
    params.append("redirect_uri", spotifyEnvironment.spotifyRedirectUri);

    const credential = await sessionRepository.requestForSpotifyCredential({
      params,
      configs,
    });

    return credential;
  },
  async refreshCredential({ refreshToken }: { refreshToken: string }) {
    logger.debug("[sessionBusiness.refreshCredential]");

    const configs = this.credentialRequestConfigs();

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", refreshToken);

    const newCredential = await sessionRepository.requestForSpotifyRefreshCredential(
      {
        params,
        configs,
      },
    );

    return newCredential;
  },
};

export default sessionBusiness;
