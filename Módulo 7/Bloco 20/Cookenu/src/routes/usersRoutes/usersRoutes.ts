import express from "express";

import { authMiddleware } from "../../middlewares/auth";

import { loginUserControllers } from "../../controllers/usersControllers/loginUserControllers";
import { createUsersControllers } from "../../controllers/usersControllers/createUsersControllers";
import { createRecipesControllers } from "../../controllers/createRecipesControllers/createRecipesControllers";

export const usersRoutes = express.Router();

usersRoutes.post("/login", loginUserControllers);
usersRoutes.post("/cadaster", createUsersControllers);
usersRoutes.post("/recipes", authMiddleware, createRecipesControllers);