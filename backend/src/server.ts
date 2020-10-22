import express from "express";
import logger from "./utils/logger";
import { appEnvironment } from "./configs/environment";

import sessionRoutes from "./routes/sessionRoutes";

const app = express();
app.use(express.json());

app.use(sessionRoutes);

app.listen(appEnvironment.appPort, () => {
  logger.info(`Server is running at port ${appEnvironment.appPort}`);
});
