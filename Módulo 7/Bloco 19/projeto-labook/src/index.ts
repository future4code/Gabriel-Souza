import { app } from "./server";

import { userRoutes } from "./routes/userRoutes/userRoutes";
import { postRoutes } from "./routes/postRoutes/postRoutes";

app.use("/user", userRoutes);
app.use("/post", postRoutes);
