import express from "express";

import { cadasterUsersController } from "../../controllers/usersControllers/cadasterUserController";

export const userRoutes = express.Router();

userRoutes.post("/cadaster", cadasterUsersController);