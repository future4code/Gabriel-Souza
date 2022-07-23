import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import { api } from "../../../services/api";

import { FormPopUp } from "../../../components/FormPopUp";
import { SubPopUp } from "../../../components/SubPopUp";
import { PopUpBackground } from "../../../components/PopUpBackground";
import { ButtonCTA } from "../../../components/ButtonCTA/styles";
import { Load } from "../../../components/Load";
import { ContainerHeader } from "../../../components/ContainerHeader/styles";

import { Container, Ul, LiCard, Error } from "./styles";

import { AnimatePresence } from "framer-motion";
import { container, item } from "../../../animations/animations";

import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import {IOutputProductData}from "../../Home/index";

interface ProductsProps {
  products: IOutputProductData[] | any;
  getAllProducts: () => Promise<void>;
  getAllPurchases: () => Promise<void>;
  handleProductsPaths: ( path: string ) =>  string | any;
  errorsProducts: string | null;
  handleErrorsProducts: ( value: string ) => string | any;
  isLoad: boolean | null;
};

export const Products = ({ 
  products, 
  getAllProducts,
  getAllPurchases,
  handleProductsPaths, 
  errorsProducts, 
  handleErrorsProducts,
  isLoad
}: ProductsProps) => {

    const [ productName, setProductName ] = useState<string>("");
    const [ selectedId, setSelectedId ] = useState<null | string>(null);

    const [ errorMessage, setErrorMessage ] = useState<string | null>(null);
    const [ successBuy, setSuccessBuy ] = useState<any | null>(null);

    const { form, onChange, clearInputs } = useForm({
      quantity: "",
      date: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
      if ( productName.length === 0 ) handleErrorsProducts("");
      handleProductsPaths(`?name=${productName}`);
    }, [productName]);

    const productSelected = products.find((  product: IOutputProductData ) => {
      if ( selectedId !== null ) return product?.id === selectedId;
    });

    const buyProduct = async ( e?: any ) => {
      e.preventDefault();
      try {
        await api.post(`/purchase/${productSelected?.id}`, {
          chosenQuantity: Number(form.quantity), 
          scheduledDate: form.date
        });
        clearInputs();
        setSuccessBuy(productSelected);
        setSelectedId(null);
        await getAllProducts();
        await getAllPurchases();

        if ( products.length === 1 ) window.location.reload();
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error?.response.data);
      };
    };

  return (

    <Container animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 1.5}}>
      {
        successBuy && (
          <PopUpBackground>
            <SubPopUp>
              <main className="container-success">
                  <div>
                    <button className="button-close" onClick={() => setSuccessBuy(null)}>
                        <AiOutlineClose />
                    </button>
                  </div>
                  <h1>Compra efetuada com sucesso.</h1>
                  <h3>Nome do produto: {successBuy?.name}</h3>
                  <h3>Para ver as suas compras vá para a lista de compras</h3>
                  <h2>Click aqui para ir:
                    <button className="button-navigate" onClick={() => navigate("/admin/purchases")}>
                      Lista de Compras
                    </button>
                  </h2>
              </main>
            </SubPopUp>
          </PopUpBackground> 
        )
      }
      <h1>Produtos</h1>
      <ContainerHeader>
          <div className="search-box">
            <button className="btn-search"><i className="fas fa-search"><BsSearch /></i></button>
            <input type="text" className="input-search" placeholder="Prorcure um produto..." 
              value={productName} onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <select
            onChange={(e) => handleProductsPaths(e.target.value)}
          >
            <option value="?price=min">Max</option>
            <option value="?price=max">Min</option>
          </select>
      </ContainerHeader>

     {
        errorsProducts
        ?
          (
             <div>
                <br />
                <h3>{errorsProducts}</h3> 
             </div>
          )
        :
          (
            <Ul  variants={container}
                    initial="hidden"
                    animate="visible"
                  >
              {
                    isLoad 
                    ? 
                    ( <Load/> )
                     :
                    ( products?.map(( items: any, index: any ) => {
                      return (
                        <LiCard key={items.id} layoutId={items.id} variants={item}>
                              <div>
                                <div className="span"> <span>{index + 1}</span></div>
                                  <h3>{items?.name}</h3>
                                  <p>Preço: R$ {items?.price.toFixed(2)}</p>
                                  <p>Quantidade: {items?.qty_stock}</p>
                              </div>
                              <ButtonCTA>
                                <button className="button" onClick={() => setSelectedId(items.id)}>
                                  COMPRAR
                                </button>
                              </ButtonCTA>
                        </LiCard>
                        )
                      })
                  )
                }
            </Ul>
          )
     }

        {/* PopUp */}
      <AnimatePresence>
          {selectedId && (
              <PopUpBackground>
                  <SubPopUp layoutId={selectedId}>
                      <h1>{productSelected?.name}</h1>
                      <h2>Preço: R$ {productSelected?.price.toFixed(2)}</h2>
                      <h2>Quantidade dísponivel em stock:</h2>
                      <h2>{productSelected?.qty_stock}</h2>
                      <Error>{errorMessage}</Error>

                      <FormPopUp>
                          <label htmlFor="qty">Quantidade</label>
                          <input type="number" id="qty"
                                name="quantity"
                                value={form.quantity}
                                onChange={onChange}
                          />
                          <label htmlFor="schedule">Agendar</label>
                          <input type="date"  id="schedule" required 
                                name="date"
                                value={form.date}
                                onChange={onChange}
                          />
                          <div>
                              <button type="button" onClick={() => setSelectedId(null)}>CANCELAR</button>
                              <ButtonCTA>
                                <button type="submit" className="button"
                                  onClick={buyProduct}
                                >FINALIZAR</button>
                              </ButtonCTA>
                          </div>
                      </FormPopUp>
                </SubPopUp>
              </PopUpBackground>
          )}
     </AnimatePresence>
    </Container>

  );
};