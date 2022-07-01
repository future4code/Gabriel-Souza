import express from "express";

import { signupControllers } from "../../controllers/signupControllers/signupControllers";
import { getUserControllers } from "../../controllers/getUserControllers/getUserControllers";
import { loginControllers } from "../../controllers/loginControllers/loginControllers";
import { getInformationsUserControllers } from "../../controllers/getInformationsUserControllers/getInformationUserControllers";

export const userRoutes = express.Router();

userRoutes.get("/profile", getInformationsUserControllers);
userRoutes.get("/:email", getUserControllers);

userRoutes.post("/signup", signupControllers);
userRoutes.post("/login", loginControllers);

