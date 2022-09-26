import { Request, Response } from "express";

import { PurchaseRepository } from "../../repositories/purchaseRepository";
import { PurchaseCase } from "../../business/PurchaseCases/PurchaseCase";

import { CustomError } from "../../errors/CustomError";

export const purchaseController = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const idProduct = req.params.id;
    const {  chosenQuantity, scheduledDate } = req.body;

    const purchaseRepository = new PurchaseRepository();

    const purchaseCase = new PurchaseCase(purchaseRepository);

    await purchaseCase.purchase(
      {
        idProduct,
        chosenQuantity,
        scheduledDate
      }
    );
    
    return res.status(201).json({ message: "Compra efetuada com sucesso." });
  } catch ( error ) {
    return error instanceof CustomError ? 
    res.status(error.statusCode).send(error.message) 
    : 
    res.status(500).send(error.message || error.sqlMessage);
  };
};