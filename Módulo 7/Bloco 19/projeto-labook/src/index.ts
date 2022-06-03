import { app } from "./server";

import { usersRoute } from "./routes/CadasterUsersRoutes/cadasterUsersRoutes";

app.use("/user", usersRoute);