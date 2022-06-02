import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/User";

export class GetAllUsersController {
  async get(req: Request, res: Response): Promise<any> {
    try {
  
      const userBusiness = new UserBusiness();

      const users: Array<UserDTO> = await userBusiness.getAllUsers();

      res.status(200).json({ allUsers: users });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}