import { Request, Response } from "express";

import { GetInformatiosUserRepository } from "../../repositories/database-repositories/getInformatiosUser-database-repository";
import { GetInformationsUserCases } from "../../business/getInformationsUserCases/GetInformationsUserCases";

import { CustomError } from "../../Erros/CustomError";

export const getInformationsUserControllers = async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers.authorization as string;
    
    const getInformatiosUserRepository = new GetInformatiosUserRepository();

    const getInformationsUserCases = new GetInformationsUserCases(
      getInformatiosUserRepository
    );

    const user = await getInformationsUserCases.getInformationsUser({token});

    return res.status(200).json({
      id: user.id, 
      email: user.email
    });
  } catch (error: any) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};