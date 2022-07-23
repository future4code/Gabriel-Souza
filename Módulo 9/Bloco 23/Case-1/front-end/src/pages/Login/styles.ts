import styled from "styled-components";
import { motion } from "framer-motion";

interface PropsError {
  error: string
};

//* =================================

export const Container = styled(motion.main)`
  height:  100vh;
  text-align: center;
  color: var(--text-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > h1 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    width: 75%;

    font-family: var( --font-montserrat);
    font-weight: 500;
  }
`;

export const Form = styled(motion.form)`
  width: 100%;

  font-family: var( --font-lato);
  font-weight: 400;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > label {
    font-size: 1.2rem;
  }

  > input {
    height: 30px;
    width: min(65%, 320px);
    text-indent: 5px;

    border-radius: 5px;
    border: none;

    transition: box-shadow 300ms ease-out;

    :focus {
      box-shadow: var(--input-focus-color) 0px 0px 5px 5px;
    }

    ::placeholder {
      padding-left: 5px;
    }
  }

  > button {
    border-radius: 5px;
    border: none;

    width: min(15vw, 50px);
    height: 25px;

    background-color: var(--button-background-color);
    transition: 0.5s;

    &:hover {
      background-color: var(--button-background-hover);
    }
  }
`;

export const Error = styled.p<PropsError>`
  display: ${(Props) => Props.error};
  color: var(--errors-message-color);
`;