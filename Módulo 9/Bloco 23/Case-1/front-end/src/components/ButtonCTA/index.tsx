import { ReactNode, useEffect } from "react";
import { ButtonCTA } from "./styles";

interface Element {
  children: ReactNode;
};

export const ButtonContainer = ({ children }: Element) => {

  return <ButtonCTA>{children}</ButtonCTA>
};