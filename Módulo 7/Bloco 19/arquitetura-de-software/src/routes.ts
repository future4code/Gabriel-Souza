import express from "express";

import { apiGetAllUsers } from "./controllers/apiUsers/apiGetAllUsers";
import { apiCreateUsers } from "./controllers/apiUsers/apiCreateUsers";
import { apiDeleteUsers } from "./controllers/apiUsers/apiDeleteUsers";

export const routes = express.Router();

routes.get("/all", apiGetAllUsers);
routes.post("/createUser", apiCreateUsers);
routes.delete("/:id", apiDeleteUsers);