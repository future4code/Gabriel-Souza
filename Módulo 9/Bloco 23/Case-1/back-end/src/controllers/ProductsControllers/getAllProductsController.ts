import { Request, Response } from "express";

import { GetAllProductsRepository } from "../../repositories/productsRepository";
import { GetAllProductsCases } from "../../business/ProductsCases/GetAllProductCases";

import { CustomError } from "../../errors/CustomError";

export const getAllProductsController = async ( req: Request, res: Response ): Promise<{}> => {
    try {
      
      const minMax = req.query.price as string;
      const nameProduct = req.query.name as string;

      const getAllProductsRepository = new GetAllProductsRepository();

      const getAllProductsCases = new GetAllProductsCases(
        getAllProductsRepository
      );

      const products = await getAllProductsCases.getProducts({ minMax, nameProduct });

      return res.status(200).json(products);
    } catch ( error ) {
      return error instanceof CustomError
      ?
      res.status(error.statusCode).send(error.message)
      :
      res.status(500).send(error.message || error.sqlMessage)
    };
};