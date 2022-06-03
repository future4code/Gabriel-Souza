import express from "express";

import { cadasterUsersController } from "../../controllers/cadasterUserController/cadasterUserController";

export const usersRoute = express.Router();

usersRoute.post("/cadaster", cadasterUsersController);