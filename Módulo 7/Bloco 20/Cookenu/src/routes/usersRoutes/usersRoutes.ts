import express from "express";

import { createUsersControllers } from "../../controllers/usersControllers/createUsersControllers";

export const usersRoutes = express.Router();

usersRoutes.post("/cadaster", createUsersControllers);