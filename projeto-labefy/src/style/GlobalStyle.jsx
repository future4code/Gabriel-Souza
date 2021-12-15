import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .div-geral{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 15px;
    }

    .button-move{
        margin-top: 20px;
    }
`;