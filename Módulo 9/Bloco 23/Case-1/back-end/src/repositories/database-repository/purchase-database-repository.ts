import { 
  IPurchaseRepository, 
  IPurchaseRepositoryData, 
  IGetAllPurchasesRepository,
  IUpdateQuantityRepository,
  IUpdateQuantityDataRepository,
  IDeletePurchaseRepository,
  IProductOutputData
} from "../purchase-repository"

import { Database } from "../../data/database/Database";

export class GetAllPurchasesRepository extends Database implements IGetAllPurchasesRepository {

  async getAllPurchases () {
    const purchases = await Database.connectionDatabase("Purchases").select();
    return purchases;
  };

  async searchPurchase ( name: string ) {
    const purchases = await Database.connectionDatabase("Purchases")
    .where("name", "like", `%${name}%`);
    return purchases;
  };

  //* Todos os produtos começando do preço máximo
  async getMaxPrice (){
    const maxPriceProducts = await Database.connectionDatabase("Purchases").select()
   .orderBy("total_price" ,"ASC");
    return maxPriceProducts;
  };

  //* Todos os produtos começando do preço mínimo
  async getMinPrice (){
    const minPriceProducts = await Database.connectionDatabase("Purchases").select()
    .orderBy("total_price" ,"DESC")
    return minPriceProducts;
  };
};

export class PurchaseRepository extends Database implements IPurchaseRepository {
  async purchase ( data: IPurchaseRepositoryData ) {
    await Database.connectionDatabase("Purchases").insert({
      id: data.id,
      name: data.name,
      total_price: data.totalPrice,
      chosen_quantity: data.chosenQuantity,
      scheduled_date: data.scheduledDate,
      id_product: data.idProduct,
      product_quantity_stock: data.productQuantityStock
    });
  };

  async searchProduct ( id: string ) {
    const product = await Database.connectionDatabase("Products").where("id", id);
    return product;
  };

  async addAccumulatedBuys ( data: IProductOutputData ) {
    await Database.connectionDatabase("Accumulated_list_buys").insert({
      id: data.id,
      name: data.name,
      price: data.price,
      qty_stock: data.qty_stock
    });
  };

  async deleteProduct ( id: string ) {
    await Database.connectionDatabase("Products").delete().where("id", id);
  };
};

export class UpdateQuantityRepository extends Database implements IUpdateQuantityRepository {
  async updateQuantity ( data: IUpdateQuantityDataRepository ) {
    await Database.connectionDatabase("Purchases").update("chosen_quantity", data.newQuantity)
    await Database.connectionDatabase("Purchases").update("total_price", data.updatePrice)
    .where("id", data.idPurchase);
  };

  async searchPurchase ( id: string ) {
    const purchase = await Database.connectionDatabase("Purchases")
    .where("id", id);
    return purchase;
  };

  async searchProduct ( id: string ) {
    const product = await Database.connectionDatabase("Accumulated_list_buys")
    .where("id", id);
    return product;
  };
};

export class DeletePurchaseRepository extends Database implements IDeletePurchaseRepository {
  async deletePurchase ( id: string ) {
    await Database.connectionDatabase("Purchases").delete().where("id", id);
  };

  async  searchPurchase (id: string) {
    const purchase = await Database.connectionDatabase("Purchases")
    .where("id", id);
    return purchase;
  };

  async  searchProductAccumulatedList (id: string) {
    const product = await Database.connectionDatabase("Accumulated_list_buys")
    .where("id", id);
    return product;
  };

  async addProductAgain ( data: IProductOutputData ) {
    await Database.connectionDatabase("Products").insert({
      id: data.id,
      name: data.name,
      price: data.price,
      qty_stock: data.qty_stock
    });
  };

  async deleteProductAccumulatedList ( id: string ) {
    await Database.connectionDatabase("Accumulated_list_buys").delete()
    .where("id", id);
  };
};