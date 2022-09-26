import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";

import { api } from "../../../services/api";

import { FormPopUp } from "../../../components/FormPopUp";
import { SubPopUp } from "../../../components/SubPopUp"; 
import { PopUpBackground } from "../../../components/PopUpBackground";
import { ButtonCTA } from "../../../components/ButtonCTA/styles";
import { Load } from "../../../components/Load";
import { ContainerHeader } from "../../../components/ContainerHeader/styles";

import { Container, Ul, LiCard, ButtonsLayout1, ButtonsLayout2, Error } from "./styles";

import { AnimatePresence } from "framer-motion";
import { container, item } from "../../../animations/animations";

import { BsSearch } from "react-icons/bs";

import { IPurchaseOutputData } from "../../Home/index";

interface PurchasesProps {
  getAllPurchases: () => Promise<void>;
  getAllProducts: () => Promise<void>;
  purchases: IPurchaseOutputData[];
  handlePurchasesPaths: ( path: string ) => string | any;
  errorsPurchases: string | null;
  handleErrorsPurchases: ( value: string ) => string | any;
  isLoadPurchase: boolean | null;
};

export const Purchases = ({ 
  purchases, 
  getAllPurchases, 
  getAllProducts,
  handlePurchasesPaths,
  errorsPurchases,
  handleErrorsPurchases,
  isLoadPurchase
}: PurchasesProps) => {

  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [ selectedLayout, setSelectedLayout ] = useState<string>("");

  const [ productName, setProductName ] = useState<string>("");

  const [ messageSuccess, setMessageSuccess ] = useState<string | null>(null);
  const [ messageError, setMessageError ] = useState<string | null>(null);

  const { form, onChange, clearInputs } = useForm({
    quantity: ""
  });

  useEffect(() => {
    if ( productName.length === 0 ) handleErrorsPurchases("");
    handlePurchasesPaths(`?name=${productName}`);
  }, [productName]);

  //* Escolher entre os layouts dos botões excluir e editar
  const handleLayouts = ( id: any, layout: string ) => {
    setSelectedId(id);
    setSelectedLayout(layout);
  };

  const productSelected = purchases?.find((  product: IPurchaseOutputData ) => {
    if ( selectedId !== null ) return product?.id === selectedId;
  });

  const editQuantity = async (e?: any): Promise<void> => {
    e?.preventDefault();
    try {
      await api.put(`/purchase/${productSelected?.id}`, {
        newQuantity: Number(form.quantity)
      });
      clearInputs();
      await getAllPurchases();
      setMessageSuccess("Quantidade atualizada.");
      setTimeout(() => setMessageSuccess(null), 5000);
    } catch (error: any) {
      setMessageError(error?.response?.data);
      setTimeout(() => setMessageError(null), 5000);
    };
  };
  
  const deletePurchase = async () => {
    try {
      await api.delete(`/purchase/${productSelected?.id}`);
      setSelectedId(null);
      await getAllPurchases();
      await getAllProducts();

      if ( purchases.length === 1 ) window.location.reload();
    } catch (error) {
      console.log(error)
    };
  };

  return (

    <Container animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 1.5}}>
      <h1>Compras</h1>
      <ContainerHeader>
          <div className="search-box">
              <button className="btn-search"><i className="fas fa-search"><BsSearch /></i></button>
              <input type="text" className="input-search" placeholder="Prorcure uma compra..." 
                value={productName} onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <select
              onChange={(e) => handlePurchasesPaths(e.target.value)}
             >
              <option value="?price=min">Max</option>
              <option value="?price=max">Min</option>
            </select>
       </ContainerHeader>

        {
             errorsPurchases
              ?
              ( 
                <div>
                    <br/>
                    <h3>{errorsPurchases}</h3>
                </div>
               )
              :
              (
                <Ul  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                    {
                      isLoadPurchase
                      ?
                      ( <Load /> )
                      :
                      (
                        purchases?.map(( items: any, index: any ) => {
                          return (
                                <LiCard key={items.id} layoutId={items.id} variants={item}>
                                      <div>
                                        <div className="span"> <span>{index + 1}</span></div>
                                            <h3>{items.name}</h3>
                                            <p>Preço: R$ {items.total_price.toFixed(2)}</p>
                                            <p>Quantidade: {items.chosen_quantity}</p>
                                            <p>Data agendada: {items.scheduled_date}</p>
                                      </div>
                                      <ButtonsLayout2>
                                          <button onClick={() => handleLayouts(items.id, "layout1")}>
                                              EXLUIR
                                          </button>
                                          <ButtonCTA>
                                              <button className="button" onClick={() => handleLayouts(items.id, "layout2")}>
                                                EDITAR
                                              </button>
                                          </ButtonCTA>
                                      </ButtonsLayout2>
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
              selectedLayout === "layout2" ?
              (
                <PopUpBackground>
                  <SubPopUp layoutId={selectedId}>
                      <h1>{productSelected?.name}</h1>
                      <h2>Preço: R$ {productSelected?.total_price.toFixed(2)}</h2>
                      <h2>Quantidade dísponivel: {productSelected?.product_quantity_stock}</h2>
                      <h2>Quantidade escolhida:</h2>
                      <h2>{productSelected?.chosen_quantity}</h2>
                      <h3>Data agendada: {productSelected?.scheduled_date}</h3>

                      <FormPopUp>
                          <label htmlFor="qty">Alterar quantidade</label>
                         <Error messageSuccess={messageSuccess}>
                           { messageSuccess ?  
                                ( <span>{messageSuccess}</span> )
                              :
                                ( <span>{messageError}</span> ) 
                            }
                         </Error>
                          <input type="number" id="qty" required 
                                title="Digite o novo valor!"
                                name="quantity"
                                value={form.quantity}
                                onChange={onChange}
                          />
                          <ButtonsLayout2>
                              <button type="button" onClick={() => setSelectedId(null)}>CANCELAR</button>
                              <ButtonCTA>
                                <button type="submit" className="button"
                                  onClick={editQuantity}
                                >ATUALIZAR</button>
                              </ButtonCTA>
                          </ButtonsLayout2>
                      </FormPopUp>
                </SubPopUp>
              </PopUpBackground>
              ) 
              :
              (
                <PopUpBackground>
                  <SubPopUp layoutId={selectedId}>
                      <h1>Tem certeza que você quer excluir esse produto?</h1>
                      <hr/>
                      <br/>
                      <h2>Nome: {productSelected?.name}</h2>
                      <h2>Preço: R$ {productSelected?.total_price.toFixed(2)}</h2>
                      <h2>Quantidade escolhida:</h2>
                      <h2>{productSelected?.chosen_quantity}</h2>
                      <ButtonsLayout1>
                          <button onClick={() => setSelectedId(null)}>CANCELAR</button>
                          <button type="submit" className="button"
                            onClick={deletePurchase}
                          >EXCLUIR</button>
                      </ButtonsLayout1>
                  </SubPopUp>
              </PopUpBackground>
              )
          )}
     </AnimatePresence>

    </Container>

  );
};