import styled from "styled-components";

export const Container =  styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFF;

h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 3rem;
    padding-top: 20px;
}

button {
    margin-left: 7px;
}

@media screen and (max-width: 450px) {
    h1 {
        font-size: 2rem;
    }

    button {
        width: 100px;
        height: 35px;
    }
}

`;

export const ButtonDiv =  styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 10px;
`;