import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
   padding: 0;
   box-sizing: border-box;
   background-color: #e6e6e6f9;
}

.button{
    display: block;
    margin: 5px auto;
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
`;

