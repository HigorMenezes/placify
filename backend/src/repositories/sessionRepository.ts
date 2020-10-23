import { AxiosRequestConfig } from "axios";
import logger from "../utils/logger";
import { spotifyAccountsApi } from "../configs/spotifyApi";

interface Credential {
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

const sessionRepository = {
  async requestForSpotifyCredential({
    params,
    configs,
  }: {
    params: URLSearchParams;
    configs: AxiosRequestConfig;
  }) {
    logger.debug("[sessionRepository.requestForSpotifyCredential]");

    const { data: credential } = await spotifyAccountsApi.post<Credential>(
      `api/token`,
      params,
      configs,
    );

    logger.debug(
      "[sessionRepository.requestForSpotifyCredential]",
      "returning:",
      credential,
    );
    return credential;
  },
  async requestForSpotifyRefreshCredential({
    params,
    configs,
  }: {
    params: URLSearchParams;
    configs: AxiosRequestConfig;
  }) {
    logger.debug("[sessionRepository.requestForSpotifyRefreshCredential]");
    const { data: newCredential } = await spotifyAccountsApi.post<Credential>(
      `api/token`,
      params,
      configs,
    );

    logger.debug(
      "[sessionRepository.requestForSpotifyRefreshCredential]",
      "returning",
      newCredential,
    );
    return newCredential;
  },
};

export default sessionRepository;
