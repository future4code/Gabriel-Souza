import { ChangeEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";

//* Api
import { api } from "../../../services/api";

//* B - Mask
import InputMask from "react-input-mask";

import { clearSpecialCharacters } from "../../../utils/clearSpecialCharacters";

//* Animations
import { container, item } from "../../../assets/animations/animation";
import { motion } from "framer-motion";

//* Components
import { ButtonsStyle } from '../../ButtonsStyle';
import { SingleInput } from "../../singleInput";
import { SuccessModal } from "../../successModal";

//* Styles
import { FormContainer, SelectContainer } from './styles';

//* ====================================================================

interface FormCadasterProps {
  isActiveModal: boolean;
  setIsActiveModal: ( input: boolean ) => void;
};

export const FormCadaster = ({ isActiveModal, setIsActiveModal }: FormCadasterProps) => {
  const [ errors, setErrors ] = useState<string>("");
   
  const { form, onChange, clearInputs } = useForm({
    name: "",
    email: "",
    tax_id: "",
    password: "",
    password_confirmation: "",
    company: "",
    segment: ""
  });

  const onSubmitRequest = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if ( form.password_confirmation !== form.password ) {
        throw new Error("Senha incorreta!");
      } else setErrors("");

      await api.post("/register", {
        ...form,
        tax_id: clearSpecialCharacters(form.tax_id)
      });

      setIsActiveModal(true);
      clearInputs();
      setErrors("");
    } catch (error: any) {
      console.log(error?.message);
      setErrors(error?.message);
    };
  };

    return (
       <>
        <div>
          {/* Ativando o SuccessModal sí a requisição for bem sucedida */}
          { isActiveModal && <SuccessModal setIsActiveModal={setIsActiveModal} /> }
        </div>
        <br />
        {errors && <p style={{textAlign: "center"}}>Algo deu errado desculpe!</p>}
        <br />
        <FormContainer onSubmit={onSubmitRequest} method="post" 
          isActiveModal={isActiveModal}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <SingleInput>
            <input type="text" id="name" className="input"
                placeholder="Nome"
                name="name"
                value={form.name}
                onChange={onChange}
                required 
              />
            <label htmlFor="name" id="label-name">Nome</label>
          </SingleInput>

          <motion.div className="container-responsively" variants={item}>
            <div>
              <SingleInput>
                <InputMask mask="999.999.999-99" type="text" id="cpf" 
                  className="input" 
                  name="tax_id"
                  value={form.tax_id}
                  onChange={onChange}
                  required 
                 />
                <label htmlFor="cpf">CPF</label>
              </SingleInput>

              <SingleInput>
                <input type="password" id="password" className="input"
                  placeholder="Digite sua senha" 
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  required 
                />
                <label htmlFor="password">Senha</label>
              </SingleInput>

              <SingleInput>
                <input type="text" id="company" className="input"
                  placeholder="Empresa"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  required 
                />
                <label htmlFor="company">Empresa</label>
              </SingleInput>
            </div>

            <motion.div>
              <SingleInput>
                  <input type="email" id="email" className="input" 
                    placeholder="E-mail" 
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                    title="O email não segue o padrão correto"
                    required 
                    />
                  <label htmlFor="email">E-mail</label>
                </SingleInput>
        
                <SingleInput>
                  <input type="password" id="password_confirmation" className="input"
                    placeholder="Confirme sua senha" 
                    name="password_confirmation"
                    value={form.password_confirmation}
                    onChange={onChange}
                    required 
                    />
                  { errors === "Senha incorreta!" 
                    ? ( <label htmlFor="password_confirmation">{errors}</label> ) 
                    : (<label htmlFor="password_confirmation">Senha</label> )
                  }
                </SingleInput>

                <SelectContainer>
                    <label htmlFor="segment">Classifição</label>
                    <select id="segment" required
                      name="segment"
                      onChange={onChange}
                    >
                      <option value="">Escolha sua categoria</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Revendedor">Revendedor</option>
                      <option value="Distribuidor">Distribuidor</option>
                    </select>
                  </SelectContainer>
                  <br /> <br />
              </motion.div>
          </motion.div>  
          {/* container-responsively end */}
          <ButtonsStyle>
            <button type="submit">ENVIAR</button>
          </ButtonsStyle>
        </FormContainer>
       </>
    );
};