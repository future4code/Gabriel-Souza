import styled from "styled-components";

export const ButtonsStyle = styled.div`
    display: flex;
    justify-content: center;

    > button {
      height: 5vh;
      width: 100px;
      background-color: #ffc40c;
      color: #fff;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: clamp(.550rem, .800vw, .700rem);
    }


    //* Responsive
    @media (min-width: 750px) {
      width: 80px;
    }

    @media (min-width: 1000px) {
      padding-bottom: 55px;
    }

    @media (min-width: 1200px) {
      width: 120px;
    }
`;