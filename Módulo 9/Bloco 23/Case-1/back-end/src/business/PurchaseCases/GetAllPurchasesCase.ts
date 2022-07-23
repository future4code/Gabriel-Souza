import { IGetAllPurchasesRepository } from "../../model/purchaseModel";

import { 
  VerifyIfExistPurchases, 
  VerifyIfExistAllPurchases
 } from "../../errors/PurchaseErrors/PurchaseErrors";

import { convertDateUS } from "../../services/convertDateUS";

enum MinMaxPrice {
  MAX = "max",
  MIN = "min"
};

interface IGetPurchasesCasesRequest {
  minMax?: string,
  nameProduct?: string;
};

export class GetAllPurchasesCase {
  constructor (
    private getAllPurchasesRepository: IGetAllPurchasesRepository
  ){};
  
  async getPurchases ( request: IGetPurchasesCasesRequest ) {
     //* Escolher em ordem de preços max ou min
     const { minMax, nameProduct } = request;

     if ( minMax === MinMaxPrice.MAX ) {
       const max = await this.getAllPurchasesRepository.getMaxPrice();
       max.forEach((product) =>
       product.scheduled_date = convertDateUS(product.scheduled_date));
      return max;
     };
 
     if ( minMax === MinMaxPrice.MIN ) {
       const min = await this.getAllPurchasesRepository.getMinPrice();
       min.forEach((product) =>
        product.scheduled_date = convertDateUS(product.scheduled_date));
       return min;
     };

     if( nameProduct ) {
      const searchPurchases = await this.getAllPurchasesRepository.searchPurchase(nameProduct);
      if ( searchPurchases.length === 0 ) throw new VerifyIfExistPurchases(nameProduct);
       searchPurchases.forEach(( product ) =>
         product.scheduled_date = convertDateUS(product.scheduled_date));
       return searchPurchases;
   };

     const allPurchases = await this.getAllPurchasesRepository.getAllPurchases();

     if ( allPurchases.length === 0 ) throw new VerifyIfExistAllPurchases();

     allPurchases.forEach(( product ) =>
      product.scheduled_date = convertDateUS(product.scheduled_date));

     return allPurchases;
  };
};