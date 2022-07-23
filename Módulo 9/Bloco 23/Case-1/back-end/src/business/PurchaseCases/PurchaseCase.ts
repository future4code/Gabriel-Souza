import {  IPurchaseRepository } from "../../model/purchaseModel";

import {
   VerifyIfContainsDate,
   VerifyIfProductNotExist,
   VerifyQuantity,
   VerifyIfContainsQuantity,
   VerifyScheduleDate
  } from "../../errors/PurchaseErrors/PurchaseErrors";

import { generateId } from "../../services/generateId";
import { convertDateBR, currentDateUS } from "../../services/convertDateBR";


interface IPurchaseCasesRequest {
  idProduct: string;
  chosenQuantity: number;
  scheduledDate: string;
};

export class PurchaseCase {
  constructor (
    private purchaseRepository: IPurchaseRepository
  ) {};

  async purchase ( request:  IPurchaseCasesRequest) {

    const { idProduct, chosenQuantity, scheduledDate } = request;

    //* Converter a data que vem do body para o formato americana
    const convertScheduledDate = convertDateBR(scheduledDate);
  
   if ( !chosenQuantity || chosenQuantity <= 0 ) {
    throw new VerifyIfContainsQuantity();
   };

    if ( !scheduledDate ) {
      throw new VerifyIfContainsDate();
    };

    const [ product ] = await this.purchaseRepository.searchProduct(idProduct);

    if ( !product ) throw new VerifyIfProductNotExist();

    if ( chosenQuantity > product.qty_stock ) {
      throw new VerifyQuantity();
    };

    if ( convertScheduledDate < currentDateUS ) {
      throw new VerifyScheduleDate(scheduledDate);
    };

    const totalPrice = chosenQuantity * product.price;
    const productQuantityStock = product.qty_stock;

    const id = generateId();

    await this.purchaseRepository.purchase({
      id,
      name: product.name,
      totalPrice,
      idProduct,
      chosenQuantity,
      scheduledDate: convertScheduledDate,
      productQuantityStock
    });

    await this.purchaseRepository.addAccumulatedBuys(product);
    await this.purchaseRepository.deleteProduct(product.id);

  };
};