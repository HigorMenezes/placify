import sessionRepository from "../repositories/sessionRepository";
import { spotifyEnvironment } from "../configs/environment";

const sessionBusiness = {
  authorizationUrl() {
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
    return Boolean(error || state !== spotifyEnvironment.spotifyState);
  },
  authorizationBuffer() {
    return Buffer.from(
      `${spotifyEnvironment.spotifyClientId}:${spotifyEnvironment.spotifyClientSecret}`,
    ).toString("base64");
  },
  credentialRequestParams({ code }: { code?: string }) {
    const params = new URLSearchParams();
    params.append("grant_type", spotifyEnvironment.spotifyGrantType);
    params.append("code", code ?? "");
    params.append("redirect_uri", spotifyEnvironment.spotifyRedirectUri);

    return params;
  },
  homePageUrl() {
    return spotifyEnvironment.spotifyRedirectHomePage;
  },
  credentialRequestConfigs() {
    const credentialConfigs = {
      headers: {
        Authorization: `Basic ${this.authorizationBuffer()}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    return credentialConfigs;
  },
  async requestForCredentials({ code }: { code?: string }) {
    const params = this.credentialRequestParams({ code });
    const configs = this.credentialRequestConfigs();

    const credentials = await sessionRepository.requestForSpotifyCredential({
      params,
      configs,
    });

    return credentials;
  },
};

export default sessionBusiness;
