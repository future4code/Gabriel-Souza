import { useState } from "react";
import { FormCadaster } from "../../shared/components/forms/formCadaster";

import { Container } from "./styles";

export const Cadaster = () => {
  const [ isActiveModal, setIsActiveModal ] = useState<boolean>(false);

  return (
    <Container isActiveModal={isActiveModal}>
      <section>
        <h1>CADASTRE-SE</h1>
        <div>
          <p>Preencha os campos abaixo para validar sua participação</p>
          <p>na campanha e concorrer aos prêmios.</p>
        </div>
      </section>
      <FormCadaster 
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
    </Container>
  );
};