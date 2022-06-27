import express from "express";

import { authMiddleware } from "../../middlewares/auth";

import { loginUserControllers } from "../../controllers/usersControllers/loginUserControllers";
import { createUsersControllers } from "../../controllers/usersControllers/createUsersControllers";
import { createRecipesControllers } from "../../controllers/createRecipesControllers/createRecipesControllers";
import { fallowUsersControllers } from "../../controllers/fallowUsersControllers/fallowUsersControllers";
import { updatePasswordControllers } from "../../controllers/updatePasswordControllers/updatePasswordControllers";

export const usersRoutes = express.Router();

usersRoutes.post("/cadaster", createUsersControllers);
usersRoutes.post("/login", loginUserControllers);

//* Rotas que necessitam de autenticação 
usersRoutes.post("/recipes", authMiddleware, createRecipesControllers);
usersRoutes.post("/fallow", authMiddleware, fallowUsersControllers);

usersRoutes.patch("/password", authMiddleware, updatePasswordControllers);