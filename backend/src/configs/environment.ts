import dotenv from "dotenv";

dotenv.config();

export const spotifyEnvironment = {
  spotifyBaseUrl: process.env.SPOTIFY_BASE_URL ?? "https://api.spotify.com/v1",
  spotifyAccountsBaseUrl:
    process.env.SPOTIFY_ACCOUNTS_BASE_URL ?? "https://accounts.spotify.com",
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID ?? "",
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
  spotifyReponseType: process.env.SPOTIFY_RESPONSE_TYPE ?? "code",
  spotifyRedirectUri: process.env.SPOTIFY_REDIRECT_URI ?? "",
  spotifyState: process.env.SPOTIFY_STATE ?? "statemessage",
  spotifyScope:
    process.env.SPOTIFY_SCOPE ?? "user-read-private user-read-email",
  spotifyRedirectHomePage: process.env.SPOTIFY_REDIRECT_HOME_PAGE ?? "",
};

export const appEnvironment = {
  appPort: process.env.APP_PORT ?? 3333,
  appLogLevel: process.env.APP_LOG_LEVEL ?? "DEBUG",
  appClientUrl: process.env.APP_CLIENT_URL ?? "http://localhost:3000",
};

export default { ...spotifyEnvironment, ...appEnvironment };
