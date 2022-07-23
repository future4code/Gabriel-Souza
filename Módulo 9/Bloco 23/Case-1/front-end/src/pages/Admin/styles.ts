import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.main)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding-top: 50px;
  text-align: center;
`; 

export const  Header = styled(motion.header)`
  width: 100%;
  height: 30px;

  font-size: clamp(.500rem, 2.5vw, 1rem);

  background-color: var(--header-background-color);
  position: absolute;
  top: 0;
  
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;

  span {
    color: var(--header-span-color);
    display: flex;
    align-items: center;
  }
`;

export const SubHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > h1, h2 {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  > button {
    border-radius: 5px;
    border: none;

    width: min(15vw, 50px);
    font-size: 10px;
    height: 20px;

    background-color: var(--sub-button-background-color);
    transition: 0.5s;

    &:hover {
      background-color: var(--sub-button-background-hover);
      color: #FFF;
    }
  }
`;

export const DivButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;

  > button {
    height: 50px;
    width: min(25vw, 100px);

    border-radius: 5px;
    border: none;

    transition: 0.5s;

    &:hover {
      background-color: var(--background-hover-div-buttons);
    }
  }

   > button:focus {
    background-color: var(--background-hover-div-buttons);
  }
`;

export const Outlets = styled(motion.div)`
  width: 100%;

  padding-top: 30px;
  height: 55vh;

  display: flex;
  justify-content:center
`;