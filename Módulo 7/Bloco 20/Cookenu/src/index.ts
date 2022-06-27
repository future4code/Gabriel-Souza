import { app } from "./server";

import { usersRoutes }  from "./routes/usersRoutes/usersRoutes";

app.use("/users", usersRoutes);
