import express from 'express'
import { UserController } from '../controller/UserController'
import { GetAllUsersController  } from "../controller/GetAllUsersController";

export const userRouter = express.Router()

const userController = new UserController()
const getAllUsersController = new GetAllUsersController();

userRouter.get("/all", getAllUsersController.get);
userRouter.post("/create", userController.create)

