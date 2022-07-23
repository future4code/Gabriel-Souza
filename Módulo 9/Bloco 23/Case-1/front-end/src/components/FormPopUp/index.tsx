import { ReactNode, useEffect } from "react";

import { Form } from "./styles";

interface PropsFormPopUp {
  children: ReactNode;
};


export const FormPopUp = ({ children }: PropsFormPopUp) => {

  return <Form>{children}</Form>
};