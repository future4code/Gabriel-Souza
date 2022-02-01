import styled from "styled-components";

export const Container = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
`;

export const FormContainer = styled.form`

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const H1 = styled.div`

height: 35vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 27px;
padding-top: 150px;
`

export const ButtonDiv =  styled.div`

    height: 35vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 19px;

    button {
        margin-left: 10px;
    }
`;

export const DivInputs = styled.div`

    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    input {
        margin-top: 20px;
        height: 6.5vh;
        width: 50%;
        font-size: 1.2rem;
        border: solid 2px;
        transition: 0.5s ;
        box-shadow: 4px 5px 10px 1px;
        transition: 1s;

        :hover{
            box-shadow: 1px 1px 10px 5px #D80286 ;
            transition: 0.5s;
            border: solid 2px #D80286;
        }
    }
`;

export const CheckBoxDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;

input {
    height: 5vh;
    width: 5%;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        height: 5.5vh;
        width: 6%;
        transition: 0.2s;
    }
}
`;

export const DetailsDiv = styled.div`

position: fixed;
height: 3vh;
margin-left: 10px;
padding-top: 5px;

summary {
    cursor: pointer;
}

p {
    font-weight: bold;
}
`;