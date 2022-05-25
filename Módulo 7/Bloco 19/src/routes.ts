import express from "express";

import { apiCreateUsers } from "./controllers/apiCreateUsers";

export const routes = express.Router();

routes.post("/users", apiCreateUsers);

