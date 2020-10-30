import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./utils/logger";
import { appEnvironment } from "./configs/environment";

import routes from "./routes";

const app = express();
app.use(cors({ origin: appEnvironment.appClientUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(routes);

app.get("/test", (request, response) => {
  response.json({ test: "OK" });
});

app.listen(appEnvironment.appPort, () => {
  logger.info(`Server is running at port ${appEnvironment.appPort}`);
});
