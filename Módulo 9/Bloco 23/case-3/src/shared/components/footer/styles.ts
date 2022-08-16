import styled from "styled-components";

export const Container = styled.footer`
  height: 3vh;
  background-color: #ffc40c;
  
  font-size: clamp(.500rem, 1vw, .700rem);

  display: flex;
  justify-content: center;
  align-items: center;

  > strong {
    color: #fff;
  }

  > div {
    margin-left: 5px;
  }
`;