import express from "express";

import { cadasterUsersController } from "../../controllers/cadasterUserController/cadasterUserController";

export const userRoutes = express.Router();

userRoutes.post("/cadaster", cadasterUsersController);