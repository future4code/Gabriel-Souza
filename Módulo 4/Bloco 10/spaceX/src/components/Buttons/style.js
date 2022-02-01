import styled from "styled-components";

export const ButtonsContainer = styled.div`

  .button_slide{
    color: black;
    background-color: #FFF;
    border: 2px solid rgb(216, 2, 134);
    padding: 10px 15px;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 14px;
    letter-spacing: 1px;
    transition: ease-out 0.4s;
    cursor: pointer;
  }

  .slide_left:hover {
  box-shadow: inset 0 0 0 50px #D80286;
  color: #FFF;
}

@media screen and (max-width: 450px) {
  .button_slide {
    font-size: 9px;
  }
}
`;