import { Request, Response } from "express";

import { UpdateQuantityRepository } from "../../repositories/purchaseRepository";
import { UpdateQuantityCase } from "../../business/PurchaseCases/UpdateQuantityCase";

import { CustomError } from "../../errors/CustomError";

export const updateQuantityController = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const idPurchase = req.params.id;
    const { newQuantity } = req.body;

    const updateQuantityRepository = new UpdateQuantityRepository();

    const updateQuantityCase = new UpdateQuantityCase(
      updateQuantityRepository
    );

    await updateQuantityCase.update({
      idPurchase,
      newQuantity
    });
    
    return res.status(200).json({ message: "Quantidade atualizada com sucesso." });
  } catch ( error ) {
    return error instanceof CustomError ? 
    res.status(error.statusCode).send(error.message) 
    : 
    res.status(500).send(error.message || error.sqlMessage);
  };
};