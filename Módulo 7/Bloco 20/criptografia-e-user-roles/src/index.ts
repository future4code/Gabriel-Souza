import { app } from "./server";

import { userRoutes } from "./routes/userRoutes/userRoutes";

app.use("/user", userRoutes);
