import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;

height: 150vh;
width: 100%;
text-align: center;
font-family: "Lucida Console", Monaco, monospace;

h1 {
    margin-top: 20px;
}

button{
  margin-top: 20px;
}

`;

//* Div Buttons
export const ButtonsDiv = styled.div`

width: 50vw;
display: flex;
align-items: center;
justify-content: center;

button {
    margin: 30px 20px 0px 20px ;
}
`;
//*----------------------------------------------------

//* Style Trips
export const DivTrip = styled.div`

display: flex;
flex-direction: column;
height: 35vh;
width: 40%;
border: 2px solid #D80286;
margin-top: 5px;
gap: 9px;

`;
//*--------------------------------------------------

//* List Candidate Style

export const DivParagraph = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 10px;
gap: 4px;

p{
  :first-child{
    font-weight: bold;
  }
}
`;

export const DivList = styled.div`

display: flex;
align-items: center;

width: 50vw;
height: 35vh;
border: 2px solid rgb(216, 2, 134);;
margin: 20px 0px 5px 0px;
overflow-x: auto;
text-overflow: ellipsis;

ul {
    list-style: none;
    width: 100%;
}

h2 {
    padding-bottom: 10px;
}


`;

export const DivLi = styled.div`
display: flex;
width: 100%;

`

export const DivOverflow = styled.div`

height: 50vh;
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
//*---------------------------------------------------------------

//* Approveds

export const DivAprove = styled.div`

height: 30vh;
width: 50%;
overflow: auto;
padding-top: 50px;

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

export const DivAproveds = styled.div`

height: 10vh;
width: 100%;
overflow: auto;
margin-left: 2.5%;

display: flex;
flex-direction: column;
justify-content: center;;
font-size: 14px;
`;
//*---------------------------------------------------------------

export const DivCA = styled.div`

height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

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
`