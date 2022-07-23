interface IOutputProductData {
  id: string;
  name: string;
  price: number;
  qty_stock: number;
};

export interface IGetAllProductsRepository {
  getAllProducts: () => Promise<IOutputProductData[]>;
  searchProducts: ( name?: string ) => Promise<IOutputProductData[]>;
  getMaxPrice: () => Promise<IOutputProductData[]>;
  getMinPrice: () => Promise<IOutputProductData[]>;
};