import { IUpdateQuantityRepository } from "../../model/purchaseModel";

import {
  VerifyQuantity, 
  VerifyIfContainsNewQuantity
 } from "../../errors/PurchaseErrors/PurchaseErrors";

interface IUpdateQuantityCases {
  idPurchase: string;
  newQuantity: string;
};

export class UpdateQuantityCase {
  constructor ( 
    private updateQuantityRepository: IUpdateQuantityRepository
   ){};

   async update ( request: IUpdateQuantityCases ) {
    const { idPurchase, newQuantity } = request;

    const [ purchase ] = await this.updateQuantityRepository.searchPurchase(idPurchase);
    const [ product ] = await this.updateQuantityRepository.searchProduct(purchase.id_product);

    if ( !newQuantity ) throw new VerifyIfContainsNewQuantity();

    if ( Number(newQuantity) > product.qty_stock ) {
      throw new VerifyQuantity();
    };

    const updatePrice = Number(newQuantity) * product.price;

    await this.updateQuantityRepository.updateQuantity({
      idPurchase,
      newQuantity,
      updatePrice
    });
   };
};