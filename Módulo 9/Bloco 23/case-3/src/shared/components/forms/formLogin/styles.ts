import styled from "styled-components";

import { motion } from "framer-motion";

export const FormContainer = styled(motion.form)`
    height: 50vh;
    display: flex;
    justify-content:center;
   
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      }

    @media (min-width: 850px) {
      > div {
        width: 50%;
      }
    }
`;

export const OptionsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* border: 2px solid; */
  color: #ffc40c;

  > p {
    font-size: 13px;
    cursor: pointer;
  }
`;