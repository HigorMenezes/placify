import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./utils/logger";
import { appEnvironment } from "./configs/environment";

import validateCredentialMiddleware from "./middlewares/validateCredentialMiddleware";
import sessionRoutes from "./routes/sessionRoutes";
import userRoutes from "./routes/userRoutes";
import albumRoutes from "./routes/albumRoutes";

const app = express();
app.use(cors({ origin: appEnvironment.appClientUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(sessionRoutes);
app.use(validateCredentialMiddleware);
app.use(userRoutes);
app.use(albumRoutes);

app.get("/test", (request, response) => {
  response.json({ test: "OK" });
});

app.listen(appEnvironment.appPort, () => {
  logger.info(`Server is running at port ${appEnvironment.appPort}`);
});
