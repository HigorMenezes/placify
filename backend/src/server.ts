import express from "express";
import axios from "axios";
import { spotifyEnvironment, appEnvironment } from "./configs/environment";

const app = express();
app.use(express.json());

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

app.get("/login", async (request, response) => {
  const baseAuthorizationUrl = `${spotifyEnvironment.spotifyBaseUrl}/authorize`;
  const clientId = spotifyEnvironment.spotifyClientId;
  const reponseType = spotifyEnvironment.spotifyReponseType;
  const redirectUri = spotifyEnvironment.spotifyRedirectUri;
  const state = spotifyEnvironment.spotifyState;
  const scope = spotifyEnvironment.spotifyScope;

  const authorizationUrl = new URL(baseAuthorizationUrl);
  authorizationUrl.searchParams.append("client_id", clientId);
  authorizationUrl.searchParams.append("response_type", reponseType);
  authorizationUrl.searchParams.append("redirect_uri", redirectUri);
  authorizationUrl.searchParams.append("state", state);
  authorizationUrl.searchParams.append("scope", scope);

  response.redirect(authorizationUrl.toString());
});

app.get("/login-callback", async (request, response) => {
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

  const reponse = await axios.post<AccessCredentials>(
    `${spotifyEnvironment.spotifyBaseUrl}/api/token`,
    params,
    {
      headers: {
        Authorization: `Basic ${authorizationBuffer}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response
    .cookie("refresh_token", reponse.data.refresh_token, {
      httpOnly: true,
    })
    .cookie("access_token", reponse.data.access_token, {
      expires: new Date(new Date().getTime() + reponse.data.expires_in * 1000),
    })
    .redirect(spotifyEnvironment.spotifyRedirectHomePage);
});

app.listen(appEnvironment.appPort);
