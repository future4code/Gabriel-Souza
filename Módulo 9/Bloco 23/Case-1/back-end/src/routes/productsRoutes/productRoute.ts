import express from "express";

import { getAllProductsController }  from "../../controllers/ProductsControllers/getAllProductsController";

export const productRoutes = express.Router();

productRoutes.get("/all", getAllProductsController);