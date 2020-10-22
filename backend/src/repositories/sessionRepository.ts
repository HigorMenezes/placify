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
    const { data: credentials } = await spotifyAccountsApi.post<Credential>(
      `api/token`,
      params,
      configs,
    );

    return credentials;
  },
};

export default sessionRepository;
