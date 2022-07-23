import styled from "styled-components";

import { motion } from "framer-motion";

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
  width: min(100%, 350px);
  height: 225px;
  background-color: var(--pro-background-color);

  box-shadow: var(--pro-box-shadow-colors-1) 0px 10px 20px,var(--pro-box-shadow-colors-2) 0px 6px 6px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 25px;

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
      color: var(--pro-span-text-color);
      float: left;
      padding-left: 10px;
    }
  }
`;

export const Error = styled.span`
  width: 85%;
  color: var(--errors-message-color);
  font-size: clamp(.700rem, 2vw, 1rem);
`;