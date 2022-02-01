import React  from "react";

//* Import Route Dom Navigate
import { useNavigate } from "react-router-dom";
//*-----------------------------------------

//* Import Buttons
import { ButtonOne, ButtonTwo } from "../../components/Buttons";
//*-------------------------------------------

//* Import Styles
import { Container, ButtonDiv, DivLeft } from "./style";
//* --------------------------------------------

const Home = () => {

const navigate = useNavigate();


const pageViagens = () => {
    navigate('/Viagens');
  };

  const pageAdmin = () => {
    navigate('/Login');
  };
  
    return (

         <>
          
          <DivLeft>
              <nav id="redes-sociais">
                    <a href="https://github.com/GabrielSS187">
                      <img src="img/github-1.svg" alt="GitHub"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-silva-souza-47a220216/">
                      <img src="img/80784_linkedin-logo-white-png.png" alt="LinkeDin" id="img-likedin"/>
                    </a>
              </nav>
            </DivLeft>

          <Container>

              <h1>SpaceX</h1>

              <ButtonDiv>
                  <ButtonOne pageViagens={pageViagens}>Ver Viagens</ButtonOne>
                  <ButtonTwo pageAdmin={pageAdmin}>Área de Admin</ButtonTwo>
              </ButtonDiv>

          </Container>

         </>

    );
};

export default Home;