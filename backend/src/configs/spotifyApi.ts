import axios from "axios";
import { spotifyEnvironment } from "./environment";

export const spotifyAccountsApi = axios.create({
  baseURL: spotifyEnvironment.spotifyAccountsBaseUrl,
});

export const spotifyApi = axios.create({
  baseURL: spotifyEnvironment.spotifyBaseUrl,
});

export default { spotifyAccountsApi, spotifyApi };
