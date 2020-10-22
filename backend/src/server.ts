import express from "express";
import { appEnvironment } from "./configs/environment";

import sessionRoutes from "./routes/sessionRoutes";

const app = express();
app.use(express.json());

app.use(sessionRoutes);

app.listen(appEnvironment.appPort);
