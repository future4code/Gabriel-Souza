import { ReactNode } from "react";

import { Container } from "./styles";

interface PropsSubPopUp {
  children: ReactNode;
  layoutId?: any;
};

export const SubPopUp = ({ children }: PropsSubPopUp) => {
  return <Container animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 1}}>
                {children}
            </Container>
};