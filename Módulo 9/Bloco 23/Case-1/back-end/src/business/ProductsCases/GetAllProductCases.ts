import { IGetAllProductsRepository } from "../../model/productsModel";

import {
   VerifyIfExistProducts, 
   VerifyIfExistAllProducts 
  } from "../../errors/ProductErrors/ProductErrors";

enum MinMaxPrice {
  MAX = "max",
  MIN = "min"
};

interface IGetProductsCasesRequest {
  minMax?: string,
  nameProduct?: string;
};

export class GetAllProductsCases {
  constructor(
    private getAllProductsRepository: IGetAllProductsRepository
  ){};

  async getProducts ( request: IGetProductsCasesRequest ) {

    //* Escolher em ordem de preços max ou min
    const { minMax, nameProduct } = request;

    if ( minMax === MinMaxPrice.MAX ) {
      return await this.getAllProductsRepository.getMaxPrice();
    };

    if ( minMax === MinMaxPrice.MIN ) {
      return await this.getAllProductsRepository.getMinPrice();
    };

    //* Parametro opcional no metódo para achar algúm produto na lista
    if ( nameProduct ) {
      const searchProducts = await this.getAllProductsRepository.searchProducts(nameProduct);
      if ( searchProducts.length === 0 ) throw new VerifyIfExistProducts(nameProduct);
      return searchProducts;
    };

    const allProducts = await this.getAllProductsRepository.getAllProducts();

    if ( allProducts.length === 0 ) throw new VerifyIfExistAllProducts();

    return allProducts;
  };
};