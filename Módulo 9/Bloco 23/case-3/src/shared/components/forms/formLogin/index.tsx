import InputMask from "react-input-mask";

import { container, item } from "../../../assets/animations/animation";
import { motion } from "framer-motion";

import { SingleInput } from "../../singleInput";
import { ButtonsStyle } from "../../ButtonsStyle";

import { FormContainer, OptionsContainer } from "./styles";

export const FormLogin = () => {

  return (
    <FormContainer onSubmit={() => {}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <SingleInput>
          <InputMask mask="999.999.999-99" type="text" id="cpf" 
            className="input" 
            required 
            />
          <label htmlFor="cpf">CPF</label>
        </SingleInput>

        <SingleInput>
          <input type="password" id="password" 
            className="input" placeholder="Senha" 
            required 
            />
          <label htmlFor="password">Senha</label>
        </SingleInput>
        <OptionsContainer>
          <p>Ainda não é cadastrado?</p>
          <p>Esqueceu sua senha?</p>
        </OptionsContainer>

        <ButtonsStyle>
          <button type="submit">ENTRAR</button>
        </ButtonsStyle>
      </motion.div>
    </FormContainer>
  );
};