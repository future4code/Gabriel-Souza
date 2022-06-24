import express from "express";

import { loginUserControllers } from "../../controllers/usersControllers/loginUserControllers";
import { createUsersControllers } from "../../controllers/usersControllers/createUsersControllers";

export const usersRoutes = express.Router();

usersRoutes.post("/login", loginUserControllers);
usersRoutes.post("/cadaster", createUsersControllers);