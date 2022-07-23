import { useEffect, useState } from "react";

import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { api } from "../../services/api";

import { Login } from "../Login";
import { Admin } from "../Admin";
import { Products } from "../Admin/products/Products";
import { Purchases } from "../Admin/purchases/Purchases";

export interface IOutputProductData {
  id: string;
  name: string;
  price: number;
  qty_stock: number;
};

export interface IPurchaseOutputData {
  id: string;
  name: string;
  total_price: number;
  chosen_quantity: number;
  scheduled_date: string;
  id_product: string;
  product_quantity_stock: number
};

export const Home = () => {

  const [ productsPaths, setProductsPaths ] = useState<string>("");
  const [ errorsProducts, setErrorsProducts ] = useState<string | null>("");

  const [ purchasesPaths, setPurchasesPaths ] = useState<string>("");
  const [ errorsPurchases, setErrorsPurchases ] = useState<string | null>("");

  const [ buysTotalPrice, setBuysTotalPrice ] = useState<number>(0);

  const [ purchases, setPurchases ] = useState< IPurchaseOutputData[] | any>([]);
  const [ products, setProducts ] = useState<IOutputProductData[] | any>([]);

  const [ isLoad, setIsLoad ] = useState<boolean | null>(null);
  const [ isLoadPurchase, setIsLoadPurchase ] = useState<boolean | null>(null);

  const getAllProducts = async (): Promise<void> => {
    try {
      setIsLoad(true);
      const products = await api.get(`/products/all${productsPaths}`);
      setProducts(products.data);
      setIsLoad(null);
    } catch ( error: any ) {
      setErrorsProducts(error?.response?.data);
    };
  };

  const getAllPurchases = async (): Promise<void> => {
    try {
      setIsLoadPurchase(true);
      const purchases = await api.get(`/purchase/all${purchasesPaths}`);
      setPurchases(purchases.data);
      setIsLoadPurchase(null);
    } catch ( error: any ) {
      setErrorsPurchases(error?.response?.data);
    };
  };

  useEffect(() => {
    getAllProducts();
  }, [productsPaths, errorsProducts]);
  
  useEffect(() => {
    getAllPurchases();
  }, [purchasesPaths, errorsPurchases]);

const handleTotalPrice = () => {
 const totalPrice = purchases?.reduce(( acc: number, currentValue: number | any ): number => {
    return acc + currentValue.total_price;
  }, 0);
  setBuysTotalPrice(totalPrice);
};
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<h1>Page Not Found</h1>} />

        {/* //* Login */}
        <Route path="/" element={<Login />}/>

        {/* //* Admin */}
        <Route path="/admin" element={<Admin 
            buysTotalPrice={buysTotalPrice} 
            handleTotalPrice={handleTotalPrice }
            products={products}
            purchases={purchases}
          />} >
              <Route path="products" element={<Products
                getAllProducts={getAllProducts}
                getAllPurchases={getAllPurchases}
                products={products}
                handleProductsPaths={setProductsPaths}
                errorsProducts={errorsProducts}
                handleErrorsProducts={setErrorsProducts}
                isLoad={isLoad}
              />
              } />
              <Route path="purchases" element={<Purchases
                getAllPurchases={getAllPurchases}
                getAllProducts={getAllProducts}
                purchases={purchases}
                handlePurchasesPaths={setPurchasesPaths}
                errorsPurchases={errorsPurchases}
                handleErrorsPurchases={setErrorsPurchases}
                isLoadPurchase={isLoadPurchase}
              />
              } />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};