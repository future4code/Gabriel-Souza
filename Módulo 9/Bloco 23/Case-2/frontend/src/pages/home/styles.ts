import styled from "styled-components";

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 40px 10px;
  text-align: center;
  font-size: clamp(.800rem, 3vw, 1rem);

  > h1 {
    font-weight: 400;
  }

  > h4 {
    font-weight: 300;
  }
`;

export const Align = styled.div`
  display: flex;
  justify-content: center;

 .graphic{
  margin-top: -47px;
 }

  @media (max-width: 770px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export const Informations = styled.main`
  width: 90%;
  height: 65vh;
  
  display: flex;
  justify-content: center;
  padding-top: 50px;

  > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 770px) {
    height: 25vh;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    > div {
      width: 100%;
      align-items: center;    
    }
  }
`;