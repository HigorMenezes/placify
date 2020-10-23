import { AxiosRequestConfig } from "axios";
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
    const { data: credential } = await spotifyAccountsApi.post<Credential>(
      `api/token`,
      params,
      configs,
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
    const { data: newCredential } = await spotifyAccountsApi.post<Credential>(
      `api/token`,
      params,
      configs,
    );

    return newCredential;
  },
};

export default sessionRepository;
