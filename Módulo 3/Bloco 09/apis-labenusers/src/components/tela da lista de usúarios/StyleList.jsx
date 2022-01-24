import styled from "styled-components";

export const ListDiv = styled.div`

text-align: center;

    p{
        height: 50px;
        background-color: #dd9105;
        margin-top: 2px;
    }

    button{
        display: block;
        width: 18px;
        margin: 3px auto;
        border-radius: 50%;
        border: solid 1px;
        transition: all 0.5s;
        cursor: pointer;

        &:hover{
            background-color: red;
            transition: all 0.5s;
        }
    }
`