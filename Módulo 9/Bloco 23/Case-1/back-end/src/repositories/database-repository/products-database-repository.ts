import { IGetAllProductsRepository } from "../products-repository";

import { Database } from "./../../data/database/Database";

export class GetAllProductsRepository extends Database implements IGetAllProductsRepository {

  async getAllProducts () {
    const products = await Database.connectionDatabase("Products")
    .select();
    return products;
  };

  //* Opção de prorcurar produto
  async searchProducts ( name: string ) {
    const products = await Database.connectionDatabase("Products")
    .where("name", "like", `%${name}%`);
    return products;
  };

  //* Todos os produtos começando do preço máximo
  async getMaxPrice (){
    const maxPriceProducts = await Database.connectionDatabase("Products").select()
   .orderBy("price" ,"ASC");
    return maxPriceProducts;
  };

  //* Todos os produtos começando do preço mínimo
  async getMinPrice (){
    const minPriceProducts = await Database.connectionDatabase("Products").select()
    .orderBy("price" ,"DESC")
    return minPriceProducts;
  };
};