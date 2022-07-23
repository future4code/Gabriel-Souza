import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  width: min(100%, 720px);
  height: 550px;
  background-color:  #8BDFC3;
  border-radius: 5px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 15px;
  
  > h1, h2 {
    font-family: var(--font-montserrat);
    font-weight: 500;
    font-size: clamp(1.3rem, 3vw, 1.5rem);
    padding: 5px;
  }

  > hr {
    width: 100%;
    background-color: black;
  }

  > .container-success {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;

    > h1, h2, h3 {
      width: 90%;
      padding-top: 30px;
    }

   > h2 {
    > .button-navigate {
      padding: 15px;
      margin-left: 15px;
      margin-top:  10px;
      font-size: clamp(.900rem, 3vw, 1rem);
      transition: .5s;

      &:hover {
        background-color: #8BDFC3;
        color: #fff;
      }
    }
   }

    > div {
      width: 90%;
      display: flex;
      justify-content: end;

      > .button-close {
        height: 30px;
        width: 30px;
        font-size: 90%;

        border: none;
        border-radius: 50px;
      }
    }
  }

  @media ( max-width: 315px ) {
    height: 700px;
  }
`;