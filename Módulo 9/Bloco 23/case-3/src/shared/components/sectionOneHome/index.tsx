import { NavigateFunction, useNavigate } from "react-router-dom";

import {motion} from "framer-motion"

import { ButtonsStyle } from "../ButtonsStyle";

import { 
  Container,
  ImgCloudsSectionOne,
  ImgLogoSectionOne
} from "./styles";


import LogoCamapanhaRedTagline from "../../assets/svg/Logo-camapanha-red-tagline";

export const SectionOneHome = () => {

  const navigate: NavigateFunction = useNavigate();

  return (
    <Container id="section-home-background">
        <ImgCloudsSectionOne>
          <motion.img src={"/imgs/clouds.png"} loading="lazy" alt="clouds"
            animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 2}}
          />
        </ImgCloudsSectionOne>

        <ImgLogoSectionOne>
          <div className="svg-logo">
            <LogoCamapanhaRedTagline />
          </div>
          <div className="container-buttons">
            <a href="#main">
              <ButtonsStyle>
                <button onClick={() => navigate("login")}>
                  LOGIN
                </button>
              </ButtonsStyle>
            </a>
            <a href="#main">
              <ButtonsStyle>
                <button onClick={() => navigate("cadaster")}>
                  CADASTRE-SE
                </button>
              </ButtonsStyle>
            </a>
          </div>
        </ImgLogoSectionOne>
      </Container>
  );
};