import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class GetAllUsersController {
  async get(req: Request, res: Response):Promise<void> {
    try {
  
      const userBusiness = new UserBusiness();

      const users = await userBusiness.getAllUsers();

      res.status(200).json({ allUsers: users});

    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}