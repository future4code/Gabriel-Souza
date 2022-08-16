import styled from "styled-components";

import { motion } from "framer-motion";

interface FormContainerProps {
  isActiveModal: boolean;
};

export const FormContainer = styled(motion.form)<FormContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  //* Si o modal form true display none para estes elementos
  //* Tambem encontra-se em pages/cadaster/styles
  button, input, label, select {
    display: ${({ isActiveModal }: FormContainerProps) =>
    isActiveModal ? "none" : "normal"
    }
  }

  //* Responsividade
  > .container-responsively{
      width: 100%;
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  }

  @media (min-width: 768px) {
    .container-responsively{  
      display: flex; 
      gap: 30px;
      > div {
        width: 100%;
        padding: 20px;
        gap: 30px;
      }
    }
  }

  @media (min-width: 900px) {
    .container-responsively{  
      width: 80%;
    }
  }
`;

export const SelectContainer = styled.div`
   width: 90%;
   margin: 16.5px 0;
   position: relative;

  > label {
    font-size: 16px;
    position: absolute;
    left: 0;
    bottom: 30px;
    color: #fff;
    cursor: text;
  }

  > select {
    width: 100%;
    font-size:17px;
    padding: 5px;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: 0;
    background: none;
    color: #fff;
  }
`;