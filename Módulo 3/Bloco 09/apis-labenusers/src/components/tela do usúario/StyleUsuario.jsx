import styled from "styled-components";

export const StyleDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;

.items{
    margin-top: 15px;
}

p{
    font-weight: bold;
}

input{
    background-color: white;
    border: 1px solid;
    transition: all 0.9s;

    &:hover{
        border-color: #dd9105;
        transition: all 0.5s;
    }
}

button{
    margin-top: 15px;
    background-color: #f8a407; 
    border: 1.3px solid;
    transition: all 1s;
    cursor: pointer;

    &:hover{
        transition: all 1s;
        border-radius: 8px;
        background-color: #dd9105;
    }
}
`