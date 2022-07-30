import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #00bfff;
  font-weight: 300;

  @media (max-width: 550px) {
    height: 25vh;
  }
`;

export const Form = styled.form`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media (max-width: 930px) {
    padding: 0 10px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 40%;
  width: min(100%, 250px);

  border: none;
  border-radius: 3px;

  ::placeholder {
    padding-left: 10px;
  }

  @media (max-width: 550px) {
   height: 15%;
  }
`;

export const Button = styled.button`
  height: 40%;
  width: min(20%, 130px);

  background: none;
  border: 2px solid white;
  border-radius: 3px;
  color: white;
  cursor: pointer;

  @media (max-width: 550px) {
    height: 15%;
  }
`;