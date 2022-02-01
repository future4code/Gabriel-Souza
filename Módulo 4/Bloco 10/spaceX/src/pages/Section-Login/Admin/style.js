import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFF;
font-family: "Lucida Console", Monaco, monospace;;

h1 {
    text-align: center;
    padding-top: 20px;
}
`;

export const ButtonsDiv = styled.div`

display: flex;
align-items: center;
justify-content: center;

button {
    margin-left: 20px;
    margin-top: 50px;
}
`;

export const DivList = styled.div`

display: flex;
align-items: center;

width: 51vw;
height: 90px;
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
    width: 100%;
}

p {
    padding-left: 10px ;
}

button {
    border: none;
    background: none;
    margin-left: 2px;
    border-radius: 50%;
    font-size: 30px;
    color: #FFF;
    cursor: pointer;
}
`;

export const DivLi = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 80px;
cursor: pointer;
`


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
