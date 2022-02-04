import styled from "styled-components";

export const DivList = styled.div`

display: flex;
align-items: center;

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
width: 51vw;
height: 170px;
border: 2px solid rgb(216, 2, 134);;
margin: 20px 0px 5px 0px;
-webkit-transition: ease-out 0.4s;
-moz-transition: ease-out 0.4s;
transition: ease-out 0.4s;
overflow-y: auto;
text-overflow: ellipsis;

&:hover {
    background-color: #D80286;
    color: #FFF;
}

ul {
    list-style: none;
}

p {
    padding-left: 10px ;
}

@media screen and (max-width: 818px) {
    font-size: 0.8rem;
    height: 140px;
}

@media screen and (max-width: 645px) {
    font-size: 0.7rem;
    height: 140px;
}

@media screen and (max-width: 450px) {
    font-size: 0.7rem;
    height: 140px;
}

`;

export const DivOverflow = styled.div`

width: 54%;
overflow: auto;
margin-left: 2.5%;

::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 1 5px grey;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb {
    background: #D80286;
    border-radius: 50px;
  }

  @media screen and (max-width: 515px) {
    width: 55%;
  }

`;