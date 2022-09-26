import styled from "styled-components";

export const Container = styled.section`
  background-image: url(/imgs/background-cinza.png);
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  padding-top: 50px;
  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;

  > div {
    overflow: hidden;
  }

  //* Responsive
  @media (min-width: 750px) {
   flex-direction: row;
   gap: 40px;
  }
`;

export const TextContainer = styled.div`
  > h2 {
    font-size: clamp(.950rem, 3vw, 2rem);
    font-weight: 700;
  }

  > h4 {
    font-size: clamp(.650rem, 2vw, 1.2rem);
    font-weight: 400;
  }

  > h2, h4 {
    padding: 10px;
  }

  @media (min-width: 750px) {
    width: 60%;
    > h2, h4 {
      text-align: left;
    }
  }

  @media (min-width: 1000px) {
    width: 40%;
  }
`;

export const SvgContainer = styled.div`
  > svg {
    height: 145px;
  }

  //* Responsive
  @media (min-width: 750px) {
    > svg {
      height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
    }
  }

  /* @media (min-width: 1000px) {
    > svg {
      
    }
  } */
`;