import styled from "styled-components";

import { motion } from "framer-motion";

interface Props {
  messageSuccess: string | null;
};

export const Container = styled(motion.main)`
  width: 90%;

  font-family: var(--font-montserrat);
  font-weight: 500;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Ul = styled(motion.ul)`
  width: 100%;

  font-family: var(--font-lato);
  font-weight: 400;

  overflow-y: scroll;

  border: 1px solid;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 15px;
`;

export const LiCard = styled(motion.li)`
  border: 1px solid;
  width: min(100%, 400px);
  height: 240px;
  background-color: var(--pur-background-color);
  box-shadow: var(--pur-box-shadow-colors-1) 0px 10px 20px, var(--pur-box-shadow-colors-2) 0px 6px 6px;
  border-radius: 5px;

  font-size: clamp(1rem, 2vw, 1.2rem);

  display: flex;
  flex-direction: column;
  gap: 20px;

  > div {
    > h3 {
      font-size: clamp(.500rem, 3.5vw, 1.2rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding:10px;
    }

    > p {
      padding: 5px;
    }
  }

  .span {
    width: 100%;
    height: 30px;
    font-size: 1.5rem;
    
    > span {
      color: var(--pur-span-text-color);
      float: left;
      padding-left: 10px;
    }
  }

  /* @media  ( min-width: 1000px ) and  ( min-height: 600px) {
    height: 230px;
  } */
`;

export const ButtonsLayout2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

 button {
    height: 30px;
    width: min(25vw,100px);
    border-radius: 1000px;
    border: 1px solid;

    transition: .5s;

    &:hover {
      background-color: var(--pur-l1-button-hover);
      color: var(--pur-l1-text-color-button);
    }
}
`;

export const ButtonsLayout1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;

    > button {
      height: 30px;
      width: min(25vw,100px);
      border-radius: 1000px;
      border: 1px solid;

      transition: .5s;

      :nth-child(1){
        &:hover {
          background-color: var(--pur-l2-button-hove-nth-1);
          color: #FFF;
        }
      }

      :nth-child(2){
        &:hover {
          background-color: var(--pur-l2-button-hover-nth-2);
          color: #FFF;
        }
      }
    }
`;

export const Error = styled.span<Props>`
  width: 85%;
  color: ${(Props) => Props.messageSuccess ? "normal" : "var(--errors-message-color)"};
  font-size: clamp(.700rem, 2vw, 1rem);
`;