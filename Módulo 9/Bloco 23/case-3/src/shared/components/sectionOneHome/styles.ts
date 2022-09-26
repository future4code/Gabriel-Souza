import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  background-image: url(/imgs/background.png);
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //* Responsive
  @media (min-width: 750px) {
    flex-direction: row-reverse;
  }
  @media (min-width: 1000px) {
    gap: 80px;
  }
`;

export const ImgCloudsSectionOne = styled.div`
    display: flex;
    justify-content: center;

  > img {
    width: max(300px, 50vw);
    margin-top: 20px;
    flex-shrink: 0;
  }
`;

export const ImgLogoSectionOne = styled.div`
   > .svg-logo {
      display: flex;
      justify-content: center;
      padding-top: 10px;
        > svg {
          height: 30vh;
          width: 90%;
        }
  }

  > .container-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
  }
  
  //* Responsive
  @media (min-width: 750px) {
    > .svg-logo svg {
      height: 25vh;
    }
  }

  @media (min-width: 1000px) {
    > .svg-logo svg {
      height: 35vh; 
    }
  }

  @media (min-width: 1200px) {
    > .svg-logo svg {
      height: 50vh;
    }
  }
`;