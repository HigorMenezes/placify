import dotenv from "dotenv";

dotenv.config();

const dotenvConfig = {
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
};

export default dotenvConfig;
