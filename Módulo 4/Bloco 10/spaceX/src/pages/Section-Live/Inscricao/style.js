import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

h1{
    padding-top: 15px;
}
`;

export const ButtonsDiv =  styled.div`

    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: center;

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
/* padding-top: 60px; */

select {

    height: 7vh;
    width: 50%;
    border: 2px solid #D80286;
    overflow: hidden;

    option {
        text-overflow: ellipsis;
    }

}
`;

export const DivInputs = styled.div`

width: 100%;
height: 35vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

input {
    height: 7vh;
    width: 50%;
    border: solid 2px #D80286;;
}
`;