import Close from "../../assets/svg/Close";

import { Container, ChildrenContainer } from "./styles";

interface PropsSuccessModal {
  setIsActiveModal: ( value: boolean ) => void;
};

export const SuccessModal = ({ setIsActiveModal }: PropsSuccessModal) => {
  return (
    <Container>
      <ChildrenContainer 
       animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 2}}
      >
        <div>
          <button onClick={() => setIsActiveModal(false)}>
          <Close />
          </button>
        </div>
        <h1>Cadastro realizado com sucesso!</h1>
      </ChildrenContainer>
    </Container>
  );
};