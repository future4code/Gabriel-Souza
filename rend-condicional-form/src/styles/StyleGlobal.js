import {createGlobalStyle} from "styled-components";

export default  createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 15px;
    }

    button{
        padding:2px;
        margin: 5vh;
    }

`