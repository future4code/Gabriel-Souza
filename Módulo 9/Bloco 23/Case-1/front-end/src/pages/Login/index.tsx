import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../styles/Footer";

import { Container, Form, Error } from "./styles";

import { motion } from "framer-motion";
import { container, item } from "../../animations/animations";

export const Login = () => {

  const[ name, setName ] = useState("");
  const [ error, setError ] = useState("none");

  const navigate = useNavigate();

  const onChangeName = (event: any) =>{
    setName(event?.target?.value);
  };

const validateForm = () => {
  if ( name.trim().length !== 0 ) {
    setError("none");
    localStorage.setItem("userName", name);
    navigate("/admin");
  } else {
    setError("normal");
  };
};

  useEffect(() => {
   if ( name.trim().length !== 0 )  setError("none");
   if ( localStorage.getItem("userName") !== null ) navigate("admin");
  }, [name]);

  return (

    <Container  variants={container}
    initial="hidden"
    animate="visible"
    >
        <motion.div variants={item}>
              <h1>Olá!</h1>
              <h1>Por favor insira o seu nome para prosseguir</h1>
          </motion.div>
          
          <Form variants={item}>
              <label htmlFor="name">Seu Nome</label>
              <input type="text" placeholder="Digite..." 
                id="name" required 
                value={name}
                onChange={onChangeName}
              />
              <Error error={error}>
                Error: Por favor digite o seu nome!
              </Error>
              <button type="submit" onClick={validateForm}>Entrar</button>
          </Form>
    </Container>

  );
};