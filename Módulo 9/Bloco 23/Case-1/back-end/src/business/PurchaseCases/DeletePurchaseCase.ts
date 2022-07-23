import { IDeletePurchaseRepository } from "../../model/purchaseModel";

interface IDeletePurchaseCase {
  idPurchase: string;
};

export class DeletePurchaseCase {
  constructor (
    private deletePurchaseRepository: IDeletePurchaseRepository
  ){};

  async delete ( request: IDeletePurchaseCase ) {
    const {  idPurchase } = request;

    const [ purchase ] = await this.deletePurchaseRepository.searchPurchase(idPurchase);
    const [ product ] = await this.deletePurchaseRepository
    . searchProductAccumulatedList(purchase?.id_product);
    
    await this.deletePurchaseRepository.addProductAgain(product);

    await this.deletePurchaseRepository.deleteProductAccumulatedList(product?.id);

    await this.deletePurchaseRepository.deletePurchase(idPurchase);
  };
};