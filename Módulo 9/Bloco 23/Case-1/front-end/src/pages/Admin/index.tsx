import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { BsFillPatchCheckFill } from "react-icons/bs"

import { Footer } from "../../styles/Footer";

import { Container, Header, DivButtons, Outlets, SubHeader } from "./styles";

import { motion } from "framer-motion";
import { container, item } from "../../animations/animations";

interface PropsLogin {
  buysTotalPrice: number;
  products: any[];
  purchases: any[];
  handleTotalPrice: () => void;
};

export const Admin = ({ buysTotalPrice, products, handleTotalPrice, purchases }: PropsLogin) => {

  const navigate = useNavigate();

  const adminName = localStorage.getItem("userName");

  let balance = 1000000 - buysTotalPrice;

  const deleteAll = async () => {
    try {
      for ( let item of purchases ) {
        await api.delete(`/purchase/${item?.id}`);
      };
    } catch (error) {
      console.log(error)
    };
  };

  const logout = async () => {
    if ( purchases.length > 0 ) {
      await deleteAll();
    };
    localStorage.removeItem("userName");
    window.location.reload();
  };

  //* Começa na página de produtos
  useEffect(() => navigate("products"), []);

  //* Vigiar si existe algúm ( adminName ) no localStorage
  useEffect(() => {
    if ( adminName === null ) {
      navigate("/");
    }
  }, [adminName, navigate]);

  //* Verificar alterações em ( products ) e ( purchases )
  //* para chamar as funções inclusas dentro do useEffect
  useEffect(() =>{
    handleTotalPrice();
  }, [products, purchases, buysTotalPrice]);

  return (

      <Container>

          <Header animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 1.5 }}>
            Usuário: <strong>{adminName}</strong> logado <span><BsFillPatchCheckFill /></span>
            <p>Seu saldo: <strong>R$ {balance.toFixed(2)}</strong></p>
            <p>Preço total de compras: <strong>R$ {buysTotalPrice.toFixed(2)}</strong> </p>
          </Header>

          <motion.div variants={container}
            initial="hidden"
            animate="visible"
          >
              <SubHeader variants={item}>
                <h1>Admin</h1>
                <h2>Hellow {adminName}!</h2>
                <button onClick={logout} title="Sair">Logout</button>

                <DivButtons variants={item}>
                  <button onClick={() => navigate("products")}>Produtos</button>
                  <button onClick={() => navigate("purchases")}>Carrinho</button>
                </DivButtons>
              </SubHeader>     
          </motion.div>

          <Outlets>
            <Outlet />
          </Outlets>
      </Container>

  );
};