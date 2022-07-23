import { ReactNode } from "react";
import { Container } from "./styles";

interface PropsPopUp {
  children: ReactNode;
};

export const PopUpBackground = ({ children }: PropsPopUp) => {

  return (
    <Container>{ children }</Container>
  );
};