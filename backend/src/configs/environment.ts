import dotenv from "dotenv";

dotenv.config();

export const spotifyEnvironment = {
  spotifyBaseUrl:
    process.env.SPOTIFY_BASE_URL ?? "https://accounts.spotify.com",
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID ?? "",
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
  spotifyReponseType: process.env.SPOTIFY_RESPONSE_TYPE ?? "code",
  spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI ?? "",
  spotifyState: process.env.SPOTIFY_STATE ?? "statemessage",
  spotifyScope:
    process.env.SPOTIFY_SCOPE ?? "user-read-private user-read-email",
  spotifyGrantType: process.env.SPOTIFY_GRANT_TYPE ?? "authorization_code",
  spotifyRedirectHomePage: process.env.SPOTIFY_REDIRECT_HOME_PAGE ?? "",
};

export const appEnvironment = {
  appPort: process.env.APP_PORT ?? 3333,
};

export default { ...spotifyEnvironment, ...appEnvironment };
