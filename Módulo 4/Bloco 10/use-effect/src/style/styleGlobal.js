import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    margin-bottom: 10px;
}
select {
    height: 25px;
}

p{
    padding-top: 10px;
}

`;