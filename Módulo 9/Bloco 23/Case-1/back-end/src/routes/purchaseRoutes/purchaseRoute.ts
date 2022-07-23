import express from "express";

import { purchaseController }  from "../../controllers/PurchaseControllers/purchaseController";
import { getAllPurchasesController } from "../../controllers/PurchaseControllers/getAllPurchasesController";
import { updateQuantityController } from "../../controllers/PurchaseControllers/updateQuantityController";
import { deletePurchaseController } from "../../controllers/PurchaseControllers/deletePurchaseController";

export const purchaseRoutes = express.Router();

purchaseRoutes.get("/all", getAllPurchasesController);
purchaseRoutes.post("/:id", purchaseController);
purchaseRoutes.put("/:id", updateQuantityController);
purchaseRoutes.delete("/:id", deletePurchaseController);