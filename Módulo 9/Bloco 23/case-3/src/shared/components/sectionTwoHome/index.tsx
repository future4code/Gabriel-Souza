import { Container, SvgContainer, TextContainer } from "./styles";

import LogoCampanhaRed from "../../assets/svg/Logo-campanha-red";

export const SectionTwoHome = () => {
  return (
    <Container>
      <TextContainer>
        <h2>SÓ QUEM VENDE CURTE AS EXPERIÊNCIAS MAIS DIFERENTONAS</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Harum illum qui ad nobis atque architecto pariatur alias deleniti doloribus, 
          ducimus voluptatum esse et voluptatibus. Id facilis expedita suscipit sunt vel 
          doloribus recusandae quas optio, doloremque vitae in beatae deleniti sequi aut.
          </h4>
      </TextContainer>
      <SvgContainer>
        <LogoCampanhaRed />
      </SvgContainer>
    </Container>
  );
};