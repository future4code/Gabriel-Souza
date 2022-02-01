import styled from "styled-components";

export const Container = styled.div`

display: flex;
flex-direction: column;

height: 100vh;
text-align: center;
font-family: "Lucida Console", Monaco, monospace;
`;

export const ButtonsDiv =  styled.div`

    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;

    button {
        margin-left: 10px;
    }
`;

export const Form = styled.form`

height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
`;

export const DivInputs = styled.div`

width: 100%;
height: 45vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

select {
    height: 7vh;
    width: 50%;
    border: solid 2px #D80286;;
}

input {
    height: 7vh;
    width: 50%;
    border: solid 2px #D80286;
}
`;