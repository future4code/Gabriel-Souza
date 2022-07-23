export interface IPurchaseRepositoryData {
  id: string;
  name: string;
  totalPrice: number;
  chosenQuantity: number;
  scheduledDate: string;
  productQuantityStock: number;
  idProduct: string;
};

export interface IUpdateQuantityRepositoryData {
  idPurchase: string;
  newQuantity: string;
  updatePrice: number;
};

export interface IPurchaseOutputData {
  id: string;
  name: string;
  total_price: number;
  chosen_quantity: number;
  scheduled_date: string;
  id_product: string;
  product_quantity_stock: number;
};

export interface IProductOutputData {
  id: string;
  name: string;
  price: number;
  qty_stock: number;
};

export interface IPurchaseRepository {
  purchase: ( data: IPurchaseRepositoryData ) => Promise<void>;
  searchProduct: ( id: string ) => Promise<IProductOutputData[]>;
  addAccumulatedBuys: ( data: IProductOutputData ) => Promise<void>;
  deleteProduct: ( id: string ) => Promise<void>;
};

export interface IGetAllPurchasesRepository {
  getAllPurchases: () => Promise<IPurchaseOutputData[]>;
  searchPurchase: ( name?: string ) => Promise<IPurchaseOutputData[]>;
  getMaxPrice: () => Promise<IPurchaseOutputData[]>;
  getMinPrice: () => Promise<IPurchaseOutputData[]>;
};

export interface IUpdateQuantityRepository {
  updateQuantity: ( newQuantity: IUpdateQuantityRepositoryData ) => Promise<void>;
  searchPurchase: ( id: string ) => Promise<IPurchaseOutputData[]>;
  searchProduct: ( id: string ) => Promise<IProductOutputData[]>;
};

export interface IDeletePurchaseRepository {
  deletePurchase: ( id: string ) => Promise<void>;
  searchPurchase: ( id: string ) => Promise<IPurchaseOutputData[]>;
  searchProductAccumulatedList: ( id: string ) => Promise<IProductOutputData[]>;
  addProductAgain: ( data: IProductOutputData ) => Promise<void>;
  deleteProductAccumulatedList: ( id: string ) => Promise<void>;
};