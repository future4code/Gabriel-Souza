import { Request, Response } from "express";

import { GetAllPurchasesRepository } from "../../repositories/purchaseRepository";
import { GetAllPurchasesCase } from "../../business/PurchaseCases/GetAllPurchasesCase";

import { CustomError } from "../../errors/CustomError";

export const getAllPurchasesController = async ( req: Request, res: Response ): Promise<{}> => {
  try {
    
    const minMax = req.query.price as string;
    const nameProduct = req.query.name as string;

    const getAllPurchasesRepository = new GetAllPurchasesRepository();

    const getAllPurchasesCase = new GetAllPurchasesCase(
      getAllPurchasesRepository
    );

    const purchases = await getAllPurchasesCase.getPurchases({ minMax, nameProduct });

    return res.status(200).json(purchases);
  } catch ( error ) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};